### 前言

cookie.js是使用原生JavaScript封装的cookie操作方法。关于JS操作cookie的基本用法，可参考[@JavaScript设置、读取、删除cookie的方法详解](http://www.zymseo.com/313.html)

### 使用方法

#### 注：通过script标签、requreJs异步、ES6的import都可引入插件，下面以ES6方法为例：

``` javascript
import cookie from './cookie.js';

/*
* 设置cookie
*/
let cookieName = 'blog'; // 必须
let cookieVal = 'http://www.zymseo.com/qianduan'; // 必须
let cookieDate = new Date(); // 非必须
cookieDate.setTime(cookieDate.getTime()+10*1000); // 10s有效期
let path = '/'; // 非必须
let domain = 'zymseo.com'; // 非必须
cookie.set({name: cookieName, value: cookieVal, expires: cookieDate, path: '/', domain: 'zymseo.com'});

/*
* 读取cookie
*/
let blog = cookie.get('blog');
console.log(blog);

/*
* 删除cookie
*/
cookie.unset('blog');
```

### 基于 MIT license 开源
- 博客：[@赵一鸣](http://www.zymseo.com)
- QQ：1047832475
