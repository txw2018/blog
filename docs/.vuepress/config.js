const {vueSidebar, browserSidebar} = require('./utils/nav.js')
module.exports = {
    title: 'Tang的学习笔记',
    description: '平时的一些学习笔记',
    base:'/blog/',
    themeConfig: {
        logo: '/images/logo.jpg',
        navbar: [
            { text: 'vue', link: '/vue/introduction/' },
            { text: 'TypeScript', children:[
                {
                    text:'基础',
                    link: '/typescript/base'
                },
                {
                    text:'类型体操',
                    link: '/typescript/challenges'
                }
            ] },
            { text: '浏览器', link: '/browser/xss/' },
            { text: '设计模式', link: '/design-mode/' },
            { text: '工作日常', link: '/work/' },
            { text: 'github', link: 'https://github.com/txw2018' },
          
        ],
        sidebar:{
            '/vue/': vueSidebar,
            '/browser/': browserSidebar,
        }
    }
  }