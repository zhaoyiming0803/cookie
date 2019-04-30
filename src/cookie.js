/*
 * Description: JS操作cookie一系列方法封装
 * @author: zhaoyiming
 * @slice: 2017/10/05
 * License: MIT , https://github.com/zymfe/cookie
*/

;(function (window, document, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(window, document) :
	typeof define === 'function' && define.amd ? define([], function () {return factory(window, document);}) :
	(window.cookie = factory(window, document));
})(window, document, function (window, document) {
	'use strict';

	function Cookie () {}

	Cookie.prototype.get = function (name) {
		var cookieStr = document.cookie,
			cookieArry = cookieStr.split(';'),
			len = cookieArry.length,
			cookieObj = {},
			i, tmpArry;
		
		for (i = 0; i < len; i += 1) {
			tmpArry = cookieArry[i].replace(/\s/g, '').split('=');
			cookieObj[tmpArry[0]] = tmpArry[1];
		}

		return cookieObj[name];
	};

	Cookie.prototype.set = function (opt) {
		var host = window.location.host,
			name = opt.name,
			value = opt.value,
			expires = opt.expires ? opt.expires : '',
			path = opt.path ? opt.path : '/',
			domain = opt.domain ? opt.domain : host.substr(0, host.indexOf(':'));
		
		if (!name) {
			console.error('请设置cookie名！');
			return false;
		}

		var content = name + '=' + value + '; path=' + path + '; domain=' + domain;
		if (expires !== '') {
			content += '; expires=' + new Date(Date.now() + expires).toGMTString();
		}

		document.cookie = content;
	};

	Cookie.prototype.unset = function (opt) {
		this.set({
			name: opt.name, 
			value: '', 
			path: opt.path, 
			domain: opt.domain, 
			expires: -1
		});
	};

	var cookie = new Cookie();

	return cookie;
});