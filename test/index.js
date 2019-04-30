//const cookie = require('../src/cookie');
import cookie from '../src/cookie';

cookie.set({
  name: 'uname',
  value: 'zhaoyiming',
  expires: 3600 * 1000,
  path: '/',
  domain: 'localhost'
});

setTimeout(() => {
  console.log(cookie.get('uname'));
}, 2000);

setTimeout(() => {
  cookie.unset({
    name: 'uname',
    path: '/',
    domain: 'localhost'
  });
}, 5000);