# 什么是CSRF
CSRF 英文全称是 Cross-site request forgery，所以又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。简单来讲，CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。

### 自动发起get请求
黑客页面的HTML代码
```
<!DOCTYPE html>
<html>
  <body>
    <h1>黑客的站点：CSRF攻击演示</h1>
    <img src="https://www.xxx.com/sendmsg?user=xxx&number=100">
  </body>
</html>
```
在这段代码中，黑客将转账的请求接口隐藏在 img 标签内，欺骗浏览器这是一张图片资源。当该页面被加载时，浏览器会自动发起 img 的资源请求
如果服务器没有对该请求做判断的话，那么服务器就会认为该请求是一个正常的请求，如果是转账那么钱就被转移到黑客的账户上去了。

### 自动发起 POST 请求
有些服务器的接口是使用 POST 方法的，所以黑客还需要在他的站点上伪造 POST 请求，当用户打开黑客的站点时，是自动提交 POST 请求
```

<!DOCTYPE html>
<html>
<body>
  <h1>黑客的站点：CSRF攻击演示</h1>
  <form id='hacker-form' action="https://www.xxx.com/sendmsg" method=POST>
    <input type="hidden" name="user" value="xxx" />
    <input type="hidden" name="number" value="100" />
  </form>
  <script> document.getElementById('hacker-form').submit(); </script>
</body>
</html>
```
在这段代码中，我们可以看到黑客在他的页面中构建了一个隐藏的表单，该表单的内容假如是转账接口。当用户打开该站点之后，这个表单会被自动执行提交；当表单被提交之后，服务器就会执行转账操作。因此使用构建自动提交表单这种方式，就可以自动实现跨站点 POST 数据提交。

### 引诱用户点击链接
诱惑用户点击黑客站点上的链接，这种方式通常出现在论坛或者恶意邮件上。黑客会采用很多方式去诱惑用户点击链接，示例代码如下所示
```
<div>
  <img width=150 src=http://images.xuejuzi.cn/1612/1_161230185104_1.jpg> </img> </div> <div>
  <a href="https://www.xxx.com/sendmsg?user=xxx&number=100" taget="_blank">
    点击下载美女照片
  </a>
</div>
```
这段黑客站点代码，页面上放了一张美女图片，下面放了图片下载地址，而这个下载地址实际上是黑客用来转账的接口，一旦用户点击了这个链接，那么他的money就被转到黑客账户上了。

以上三种就是黑客经常采用的攻击方式。如果当用户登录了www.xxx.com，以上三种 CSRF 攻击方式中的任何一种发生时，那么服务器都会执行黑客的一些请求。

到这里，相信你已经知道什么是 CSRF 攻击了。和 XSS 不同的是，CSRF 攻击不需要将恶意代码注入用户的页面，仅仅是利用**服务器的漏洞和用户的登录状态**来实施攻击。

## 如何防止 CSRF 攻击
### 1.利用cookie的SameSite属性
黑客会利用用户的登录状态来发起 CSRF 攻击，而 Cookie 正是浏览器和服务器之间维护登录状态的一个关键数据，因此要阻止 CSRF 攻击，我们首先就要考虑在 Cookie 上来做文章
#### SameSite 选项通常有 `Strict`、`Lax` 和 `None` 三个值。

* Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，比如请求a.com域名下的接口只会在a.com网站下的请求才会携带cookie

* Lax 相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。

* 而如果使用 None 的话，在任何情况下都会发送 Cookie 数据

### 2.验证请求的来源站点
在服务器端验证请求来源的站点，禁止来自第三方站点的请求
需要使用HTTP 请求头中的 *Referer* 和 *Origin*
Origin只包含了域名信息，Referer包含了具体的URL路径

### 3. CSRF Token
在浏览器向服务器发起请求时，服务器生成一个 CSRF Token，然后返回给前端，前端保存下来，前端请求接口的时候带上CSRF Token，然后服务端会验证该 Token 是否合法，
