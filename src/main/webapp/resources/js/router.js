"use strict";
function Session(x) {  // 생성자로 사용할거라서 대문자로 준다.
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js');
	sessionStorage.setItem('cs',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		script : ()=>{return sessionStorage.getItem('js');},
		style : ()=>{return sessionStorage.getItem('cs');},
		img : ()=>{return sessionStorage.getItem('img');}
	};
}