### 前言

cookie.js是使用原生JavaScript封装的cookie操作方法。关于JS操作cookie的基本用法，可参考[@JavaScript设置、读取、删除cookie的方法详解](http://www.zymseo.com/313.html)

### 使用方法

#### 注：通过script标签、requreJs异步、ES6的import都可引入插件，下面以ES6方法为例：

``` javascript
import cookie from './cookie.js';

// 设置cookie
cookie.set({
  name: 'uname',
  value: 'zhaoyiming',
  expires: 3600 * 1000,
  path: '/',
  domain: 'zymseo.com'
});

// 读取cookie
console.log(cookie.get('uname'));

// 删除cookie
cookie.unset({
  name: 'uname',
  path: '/',
  domain: 'zymseo.com'
});
```

### 在线测试

事先安装 node 和 npm

打开 test 目录

依次执行 npm install 、 npm run dev 

### 基于 MIT license 开源
- 博客：[@赵一鸣](http://www.zymseo.com)
- 微信：1047832475
