"use strict"
$.prototype.nullChecker=x=>{  // $에 프로토타입 널체크를 넣어놔 의 의미임.
	let flag =false;
	let i = 0;
	for(i in x){
		if(x[i]===''){
			flag=true;
		}
	}
	return flag;
}

$.prototype.zeroChecker=x=>{  // $에 프로토타입 널체크를 넣어놔 의 의미임.
	let flag =false;
	let i = 0;
	for(i in x){
		if(x[i]== 0){
			flag=true;
		}
	}
	return flag;
}