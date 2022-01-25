---
sidebar: auto
---
# 工作日常需求

## 取消重复请求

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    
  <button onclick="post()">测试</button>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    
    const pendingRequest = {} // 储存pending请求
    const whiteRequestList = ['/todos/1'] // 需要取消重复请求的白名单

    const generateReqKey = (config) => {
      const { url } = config
      if (!url) return
      return whiteRequestList.filter(item => {
        return url.includes(item)
      })[0]
    }
    // 将请求添加到pendingRequest
    const addPendingRequest = (config) => {
      const requestKey = generateReqKey(config)
      if (requestKey) {
        config.cancelToken =
          config.cancelToken ||
          new axios.CancelToken((cancel) => {
            if (!pendingRequest[requestKey]) {
              pendingRequest[requestKey] = cancel
            }
          })
      }
    }

    // 重复请求时取消上次请求并在pendingRequest移除
    function removePendingRequest(config) {
      const requestKey = generateReqKey(config)
      if (pendingRequest[requestKey]) {
        const cancel = pendingRequest[requestKey]
        cancel(requestKey)
        delete pendingRequest[requestKey]
      }
    }
    const http =  axios.create({
      baseURL: 'https://some-domain.com/api/',
      timeout: 1000,
    });
    // 添加请求拦截器
    http.interceptors.request.use(function (config) {
      removePendingRequest(config) // 检查是否存在重复请求，若存在则取消已发的请求
      addPendingRequest(config) // 把当前请求添加到pendingRequest对象中
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });

    // 添加响应拦截器
    http.interceptors.response.use(function (response) {
      removePendingRequest(response.config) // 从pendingRequest对象中移除请求
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      }, function (error) {

      removePendingRequest(error.config || {}) // 从pendingRequest对象中移除请求
      if (axios.isCancel(error)) { // 取消的请求会进入这里
        return {
          isCancel: true
        }
      }
        return Promise.reject(error);
      });




      function post(){
        http.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
          console.log(res);
        })
      }
  </script>
</body>
</html>

```

## 倒计时
```typescript
const inBrowser = typeof window !== 'undefined';


let prev = Date.now();
function fallback(fn) {
    const curr = Date.now();
    const ms = Math.max(0, 16 - (curr - prev));
    const id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

const iRaf = window.requestAnimationFrame || fallback;
const iCancel = window.cancelAnimationFrame || window.clearTimeout;

function raf(fn) {
    return iRaf(fn)
}

function cancelRaf(id) {
    iCancel(id)
}
function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parseTimeData(time) {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    const milliseconds = Math.floor(time % SECOND);

    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}
function noop() {

}
const DEFAULT_OPTIONS = {
    time: 30 * 60 * 60 * 1000,
    autoStart: true,
    millisecond: false,
    changeFn: noop,
    finishFn: noop
}
class CountDown {
    constructor(options) {
        const { time, autoStart, millisecond, changeFn, finishFn } = { ...DEFAULT_OPTIONS, ...options }
        this.remain = 0
        this.time = time
        this.autoStart = autoStart
        this.millisecond = millisecond
        this.changeFn = changeFn
        this.finishFn = finishFn
        this.reset()
    }
    start() {
        if (this.counting) {
            return;
        }
        this.counting = true;
        this.endTime = Date.now() + this.remain;
        this.tick();
    }
    pause() {
        this.counting = false;
        cancelRaf(this.rafId);
    }
    reset() {
        this.pause();
        this.remain = +this.time;

        if (this.autoStart) {
            this.start();
        }

    }
    tick() {
        if (!inBrowser) {
            return;
        }

        if (this.millisecond) {
            this.microTick();
        } else {
            this.macroTick();
        }
    }
    microTick() {
        this.rafId = raf(() => {
            if (!this.counting) {
                return;
            }

            this.setRemain(this.getRemain());

            if (this.remain > 0) {
                this.microTick();
            }
        });
    }
    macroTick() {
        this.rafId = raf(() => {
            if (!this.counting) {
                return;
            }

            const remain = this.getRemain();

            if (!isSameSecond(remain, this.remain) || remain === 0) {
                this.setRemain(remain);
            }

            if (this.remain > 0) {
                this.macroTick();
            }
        });
    }

    getRemain() {
        return Math.max(this.endTime - Date.now(), 0);
    }

    setRemain(remain) {
        this.remain = remain;
        this.changeFn(remain)
        if (remain === 0) {
            this.pause();
            this.finishFn()
        }
    }


}



```

## 使用nodejs封装git命令选择环境提交代码
```javascript
const { execSync } = require('child_process')
const inquirer = require('inquirer')

function logFn(git) {
  console.log(git)
  execSync(git)
}
function pusBranch(env, message, currentBranchName) {
  try {
    if (env === 'dev') {
      console.log('\x1b[36m', `提交代码中...`)
      execSync(`git pull && git add . && git commit -m "${message}" && git push`)
      console.log('\x1b[36m', '提交完成...', '\x1b[0m')
    } else {
      console.log('\x1b[36m', `合并目标分支为：${env} 提交代码中...`)
      const mergeEnv = env.includes('qa') ? `qa/${env}` : env
      logFn(`git stash && git checkout ${mergeEnv}`)
      logFn(`git pull`)
      logFn(`git merge ${currentBranchName}`)
      logFn(`git push`)
      logFn(`git checkout ${currentBranchName}`)
      console.log('\x1b[36m', '提交完成...', '\x1b[0m')
    }
  } catch (e) {
    console.log('\x1b[36m', '提交失败', '\x1b[0m')
    console.log(e)
  }
}

async function inputCommitMsg() {
  const reg = /^(mod|feat|fix)\w*/ig
  return await inquirer.prompt({
    type: 'input',
    name: 'commit',
    message: '请输入 commit 信息',
    default: 'mod 新增功能',
    validate: function(input) {
      const done = this.async()
      if (reg.test(input)) {
        done(null, true)
      } else {
        done('请使用正确的格式提交commit')
      }
    }
  })
}

async function selectReleaseEnv() {
  const platformQues = [
    {
      type: 'list',
      name: 'env',
      message: '请选择提交代码环境',
      default: '',
      choices: ['dev', 'qa1', 'qa2', 'qa3', 'qa4', 'release', 'master']
    }
  ]
  return await inquirer.prompt(platformQues)
}

async function release() {
  // 获取当前分支名
  const currentBranchName = execSync('git rev-parse --abbrev-ref HEAD', { 'encoding': 'utf8' })
  console.log('\x1b[36m', `当前分支：${currentBranchName}`)
  const { commit } = await inputCommitMsg()
  const { env } = await selectReleaseEnv()
  pusBranch(env, commit, currentBranchName)
}

release()

```

## Chrome您的连接不是私密连接解决办法
您的连接不是私密连接
攻击者可能会试图从 vitejs.dev 窃取您的信息（例如：密码、通讯内容或信用卡信息）。了解详情
NET::ERR_CERT_DATE_INVALID
vitejs.dev 通常会使用加密技术来保护您的信息。Chrome 此次尝试连接到 vitejs.dev 时，该网站发回了异常的错误凭据。这可能是因为有攻击者在试图冒充 vitejs.dev，或者 Wi-Fi 登录屏幕中断了此次连接。请放心，您的信息仍然是安全的，因为 Chrome 尚未进行任何数据交换便停止了连接。

您目前无法访问 vitejs.dev，因为此网站使用了 HSTS。网络错误和攻击通常是暂时的，因此，此网页稍后可能会恢复正常。


#### 解决方法
就是在当前页面用键盘输入  thisisunsafe  ，不是在地址栏输入，就直接敲键盘就行了，页面即会自动刷新进入网页。

#### 原因
原因：因为Chrome不信任这些自签名ssl证书，为了安全起见，直接禁止访问了，thisisunsafe 这个命令，说明你已经了解并确认这是个不安全的网站，你仍要访问就给你访问了。