"use strict"; 
var algo = algo || {};
algo = {
    init :x=>{
    	algo.onCreate(x);
    	algo.setContentView();
    },
    onCreate:x=>{
    	algo.router.onCreate(x);
    },
    setContentView:()=>{
        $('#wrapper').empty();
    }
};
algo.main =(()=>{
	var $wrapper, ctx, img, script, style, compo, json,$t__l,$t__r; //$준 이유는 dom객체인지 가독성때문에 줬다.
	var onCreate = ()=>{
    	ctx = $.ctx();
    	img = $.img();
    	script = $.script();
    	style = $.style();
    	compo = script + '/compo.js';
    	/*util = script + 'util.js';*/ //프토토타입 안에 있기 때문에 이렇게 하면 에러난다. 더 상위 객체(오브젝트)에 박아뒀기 때문에 제이쿼리에서 찾으면 안됨
		setContentView();
	};
	var setContentView = ()=>{
        $('#wrapper').html(
        	 '<h1>알고리즘</h1>'
        	+'<h3><span id="seq">수 열</span></h3>'
        	+'<h3><span id="appl">응 용</span></h3>'
        	+'<div id="ctn">'
    		+'<table id="tbl" style="width:800px;height:300px;'
    		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
    		+ '<tr style="border: 1px solid black;">'
    		+  '<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
    		+  '<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
    		+ '</tr>'
    		+'</table>'
    		+'</div>');
       $t__l = $('#t__l');
       $t__r = $('#t__r');
        
        
    	$('#seq').click(x=>{
    		alert('seq 클릭');
    		$t__l.empty();
    		$.getScript(compo,()=>{
    			ui.anchor({txt:'등차수열의 합'}).appendTo($t__l);
    			ui.anchor({txt:'피보나치수열'}).appendTo($t__l);
    			ui.anchor({txt:'스위치수열 '}).appendTo($t__l);
    			ui.anchor({txt:'팩토리수열'}).appendTo($t__l);
    		});
    	});
        
        
        
       $("<ul />")
        .attr({id : 'side__menu'})
        .addClass('list-group').appendTo($t__l);
       $('<li/>')
       .attr({id : 'arith'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<li/>')
       .attr({id : 'fibonacci'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       factorial : x => {}
       $('<li/>')
       .attr({id : 'switch'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<li/>')
       .attr({id : 'factorial'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
        $('<a/>')
        .attr({href : '#'})
        .html('등차수열의 합')
        .appendTo($('#arith'))
        .click(e=>{
    	$t__r.empty();
    	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
       	let json = [{text:'시작값 : ',input:'sta'},
   				{text:'마지막값 :',input:'end'},
   				{text:'공차  :',input:'diff'}]
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#end').val(),
            	        $('#diff').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	let end = $('#end').val()*1;
            	let diff = $('#diff').val()*1;
            	let sum = 0;
            	let i =0;
            	while(i<end){
            		sum+=sta;
            		sta=sta+diff;
            		i+=diff;
            		console.log(sum);
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
    });
        /*===============================================*/
        /*===============================================*/
        /*===============================================*/
	$('#appl').click(x=>{
		$t__l.empty();
		$.getScript(compo,()=>{
			ui.ul({len : 3, id:'menu'}).appendTo($t__l);
			ui.anchor({txt:'화폐문제'})
			.appendTo($('#menu-0'))
			.click(x=>{
					$('<h6>화폐문제</h6>')
					.appendTo($t__r);
					ui.input({
						id : 'money',
						txt : '입금액'
					})
					.appendTo($t__r);
					ui.btn({clazz:'primary',txt:'전 송'})
					.appendTo($t__r)
					.click(e=>{ // 이벤트는 (x=>{}) 콜백이 기본이다.
						alert('화폐금액::'+$('#money').val());
						$.ajax({	
							url : ctx+'/algo/money/',
							method : 'post',
							contentType : 'application/json',  // appl타입
							data : JSON.stringify({money : $('#money').val()}),
							/*=================가기전==================*/
							success : d=>{ // ctrl에서 던지는 녀석
								alert('AJAX 성공이다!!'+d.test)
							},
							error : (m1,m2,m3)=>{
								alert('에러발생 1'+m1);
								alert('에러발생 2'+m2);
								alert('에러발생 3'+m3);
							/*=================갔다온 후==================*/
							}
						}); 
					});
			});
		});
	});
	
    /*===============================================*/
    /*===============================================*/
    /*===============================================*/
       $('<a/>')
       .attr({href : '#'})
       .html('피보나치수열')
       .appendTo($('#fibonacci'))
       .click(e=>{
       	$t__r.empty();
       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('피보나치 수열을 구하시오.').appendTo($('#ques'));
       	let json =[{text:'시작값',input:'sta'},
       				{text:'두번째값',input:'sec'},
       				{text:'항수',input:'n'}]
       	$.each(json, function(i, j) {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	})
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#sec').val(),
            	        $('#n').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
       			let a1 = $('#sta').val()*1;
       			let a2 = $('#sec').val()*1;
       			let n = $('#n').val()*1;
       			let sum = a1+a2;
       			let a3 = 0;
       			let i = 2;
       			while(i<n){
       				a3= a1+a2;
       				sum += a3;
       				console.log('a1 :' + a1 + '|| a2 :' + a2 + '|| a3 :' + a3 + '|| sum :'+sum);
       				a1=a2;
       				a2=a3;
       				i++;
       			}
            	a.html('결과값 : '+sum).appendTo($('#ques'));

   			}
       	});
   	});
       
       $('<a/>')
       .attr({href : '#'})
       .html('스위치수열')
       .appendTo($('#switch'))
       .click(e=>{
       	$t__r.empty();

       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('스위치 수열을 구하시오.').appendTo($('#ques'));
       	
       	let json = [{text:'시작값 : ',input:'sta'},
       			{text:'마지막값 :',input:'end'}
       			]
       	
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
            	        $('#end').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	console.log('sta :: '+sta);
            	let end = $('#end').val()*1;
            	console.log('end :: '+end);
            	let sum = 0;
            	while(sta<end){
            		sum+=sta;
            		sta++
               		sum-=sta;
            		sta++
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
       });
       
       $('<a/>')
       .attr({href : '#'})
       .html('팩토리수열')
       .appendTo($('#factorial'))
       .click(e=>{
       	$t__r.empty();
       	$('<div/>').attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>').html('팩토리얼 수열(누승)을 구하시오.').appendTo($('#ques'));
       	let json = [{text:'시작값 : ',input:'sta'},
       			{text:'마지막값 :',input:'end'}]
       	$.each(json, (i,j)=> {
       		$('<label/>').html(j.text).appendTo($('#ques'));
           	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques'));
           	$('<br/>').appendTo($('#ques'));
       	});
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		let a = $('<h6/>').attr({id:'checker'});
       		$('#checker').remove();
       		if(($.fn.zeroChecker(
        	        [$('#sta').val(),
        	        $('#end').val()]))){
       			a.html('빈칸을 채우세요').appendTo($('#ques'));
       		}else{
            	let sta = $('#sta').val()*1;
            	let end = $('#end').val()*1;
            	let sum = 1;
            	let i =1;
            	let f =1;
            	while(i<end){
            		i++;
            		f*=i;
            		sum+=f;
            		console.log(sum);
            	}
            	a.html('결과값 : '+sum).appendTo($('#ques'));
       		}
       	});
       });

	};
	return {
		onCreate : onCreate,
		setContentView : setContentView 
	};
})();

algo.router = {
	    onCreate : x =>{
	        $.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
	                ()=>{
	                    $.extend(new Session(x));        //확장. JS 객체기반언어
	                    $.getScript($.ctx()+'/resources/js/util.js')
	                    .done(x=>{console.log('실행');})
	                    .fail(x=>{console.log('실패')});
	                    algo.main.onCreate();}
	        );
	    }
	};



/*


$('#wrapper').append('<h3>정 렬</h3><div id="ctn">'
			+'<table id="tbl" style="width:800px;height:300px;'
			+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
			+ '<tr style="border: 1px solid black;">'
			+  '<td id="t__l1" style="width: 50%;border: 1px solid black;"></td>'
			+  '<td id="t__r1" style="width: 50%;border: 1px solid black;"></td>'
			+ '</tr>'
			+'</table>'
			+'</div>'
		);
let $t__l1 = $('#t__l1');
let $t__r1 = $('#t__r1');
$("<ul />")
.attr({id : 'side__menu1'})
.addClass('list-group').appendTo($t__l1);
$('<li/>')
.attr({id : 'bubble'})
.addClass('list-group-item')
.appendTo($('#side__menu1'));
$('<li/>')
.attr({id : 'insert'})
.addClass('list-group-item')
.appendTo($('#side__menu1'));
factorial : x => {}
$('<li/>')
.attr({id : 'select'})
.addClass('list-group-item')
.appendTo($('#side__menu1'));
$('<li/>')
.attr({id : 'ranking'})
.addClass('list-group-item')
.appendTo($('#side__menu1'));
$('<a/>')
.attr({href : '#'})
.html('버블정렬')
.appendTo($('#bubble'))
.click(e=>{
	$t__r1.empty();
	$('<div/>').attr({id:'ques1'}).appendTo($t__r1);
	$('<h4/>').html('버블정렬을 구하시오.').appendTo($('#ques1'));
	let json = [{text:'첫번째 : ',input:'one'},
				{text:'두번째 : ',input:'two'},
				{text:'세번째 : ',input:'thr'},
				{text:'네번째 : ',input:'fou'},
				{text:'다섯번째 :',input:'fiv'}]	
	$.each(json, (i,j)=> {
		$('<label/>').html(j.text).appendTo($('#ques1'));
   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques1'));
   	$('<br/>').appendTo($('#ques1'));
	});
	$('<button/>')
	.addClass('btn btn-primary')
	.attr({type:'button'})
	.html('결과보기')
	.appendTo($('#ques1'))
	.click(e=>{
		let a = $('<h6/>').attr({id:'checker1'});
		$('#checker1').remove();
		if(($.fn.zeroChecker([
		      				$('#one').val()*1,
		                   	$('#two').val()*1,
		                   	$('#thr').val()*1,
		                   	$('#fou').val()*1,
		                   	$('#fiv').val()*1
							$.each(json, function(i,j) {
								$('#'+j.input).val();
							})
							]))){
			a.html('빈칸을 채우세요').appendTo($('#ques1'));
		}else{
        	let one = $('#one').val()*1;
        	let two = $('#two').val()*1;
        	let thr = $('#thr').val()*1;
        	let fou = $('#fou').val()*1;
        	let fiv = $('#fiv').val()*1;
        	let sum = 0;
        	let i =1;
        	let f =1;
        	while(i<end){
        		i++;
        		f*=i;
        		sum+=f;
        		console.log(sum);
        	}
        	a.html('결과값 : '+sum).appendTo($('#ques1'));
   		}
	});
});

$('<a/>')
.attr({href : '#'})
.html('삽입정렬')
.appendTo($('#insert'))
.click(e=>{
	$t__r1.empty();
	$('<div/>').attr({id:'ques1'}).appendTo($t__r1);
	$('<h4/>').html('삽입정렬을 구하시오.').appendTo($('#ques1'));
	let json = [{text:'시작값 : ',input:'sta'},
			{text:'마지막값 :',input:'end'}]
	$.each(json, (i,j)=> {
		$('<label/>').html(j.text).appendTo($('#ques1'));
   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques1'));
   	$('<br/>').appendTo($('#ques1'));
	});
	$('<button/>')
	.addClass('btn btn-primary')
	.attr({type:'button'})
	.html('결과보기')
	.appendTo($('#ques1'))
	.click(e=>{
		let a = $('<h6/>').attr({id:'checker1'});
		$('#checker1').remove();
		if(($.fn.zeroChecker(
	        [$('#sta').val(),
	        $('#end').val()]))){
			a.html('빈칸을 채우세요').appendTo($('#ques1'));
		}else{
    	let sta = $('#sta').val()*1;
    	let end = $('#end').val()*1;
    	let sum = 0;
    	let i =1;
    	let f =1;
    	while(i<end){
    		i++;
    		f*=i;
    		sum+=f;
    		console.log(sum);
    	}
    	a.html('결과값 : '+sum).appendTo($('#ques1'));
		}
	});
});

$('<a/>')
.attr({href : '#'})
.html('선택정렬')
.appendTo($('#select'))
.click(e=>{
	$t__r1.empty();
	$('<div/>').attr({id:'ques1'}).appendTo($t__r1);
	$('<h4/>').html('선택정렬을 구하시오.').appendTo($('#ques1'));
	let json = [{text:'시작값 : ',input:'sta'},
			{text:'마지막값 :',input:'end'}]
	$.each(json, (i,j)=> {
		$('<label/>').html(j.text).appendTo($('#ques1'));
   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques1'));
   	$('<br/>').appendTo($('#ques1'));
	});
	$('<button/>')
	.addClass('btn btn-primary')
	.attr({type:'button'})
	.html('결과보기')
	.appendTo($('#ques1'))
	.click(e=>{
		let a = $('<h6/>').attr({id:'checker1'});
		$('#checker1').remove();
		if(($.fn.zeroChecker(
	        [$('#sta').val(),
	        $('#end').val()]))){
			a.html('빈칸을 채우세요').appendTo($('#ques1'));
		}else{
    	let sta = $('#sta').val()*1;
    	let end = $('#end').val()*1;
    	let sum = 0;
    	let i =1;
    	let f =1;
    	while(i<end){
    		i++;
    		f*=i;
    		sum+=f;
    		console.log(sum);
    	}
    	a.html('결과값 : '+sum).appendTo($('#ques1'));
		}
	});
});

$('<a/>')
.attr({href : '#'})
.html('랭킹')
.appendTo($('#ranking'))
.click(e=>{
	$t__r1.empty();
	$('<div/>').attr({id:'ques1'}).appendTo($t__r1);
	$('<h4/>').html('랭킹을 구하시오.').appendTo($('#ques1'));
	let json = [{text:'시작값 : ',input:'sta'},
			{text:'마지막값 :',input:'end'}]
	$.each(json, (i,j)=> {
		$('<label/>').html(j.text).appendTo($('#ques1'));
   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques1'));
   	$('<br/>').appendTo($('#ques1'));
	});
	$('<button/>')
	.addClass('btn btn-primary')
	.attr({type:'button'})
	.html('결과보기')
	.appendTo($('#ques1'))
	.click(e=>{
		let a = $('<h6/>').attr({id:'checker1'});
		$('#checker1').remove();
		if(($.fn.zeroChecker(
	        [$('#sta').val(),
	        $('#end').val()]))){
			a.html('빈칸을 채우세요').appendTo($('#ques1'));
		}else{
    	let sta = $('#sta').val()*1;
    	let end = $('#end').val()*1;
    	let sum = 0;
    	let i =1;
    	let f =1;
    	while(i<end){
    		i++;
    		f*=i;
    		sum+=f;
    		console.log(sum);
    	}
    	a.html('결과값 : '+sum).appendTo($('#ques1'));
		}
	});
});

--------------------------------------------------------------------------------------------------------------------
	$('#wrapper').append('<h3>행 렬</h3><div id="ctn">'
		+'<table id="tbl" style="width:800px;height:300px;'
		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
		+ '<tr style="border: 1px solid black;">'
		+  '<td id="t__l2" style="width: 50%;border: 1px solid black;"></td>'
		+  '<td id="t__r2" style="width: 50%;border: 1px solid black;"></td>'
		+ '</tr>'
		+'</table>'
		+'</div>'
	);	
	let $t__l2 = $('#t__l2');
	let $t__r2 = $('#t__r2');
	$("<ul/>")
	.attr({id : 'side__menu2'})
	.addClass('list-group').appendTo($t__l2);
	$('<li/>')
	.attr({id : 'fiveBy5'})
	.addClass('list-group-item')
	.appendTo($('#side__menu2'));
	$('<li/>')
	.attr({id : 'sandGlass'})
	.addClass('list-group-item')
	.appendTo($('#side__menu2'));
	factorial : x => {}
	$('<li/>')
	.attr({id : 'snail'})
	.addClass('list-group-item')
	.appendTo($('#side__menu2'));
	$('<li/>')
	.attr({id : 'diamond'})
	.addClass('list-group-item')
	.appendTo($('#side__menu2'));
	$('<li/>')
	.attr({id : 'zigzag'})
	.addClass('list-group-item')
	.appendTo($('#side__menu2'));
	$('<a/>')
	.attr({href : '#'})
	.html('fiveBy5')
	.appendTo($('#fiveBy5'))
	.click(e=>{
		$t__r2.empty();
		$('<div/>').attr({id:'ques2'}).appendTo($t__r2);
		$('<h4/>').html('fiveBy5을  구하시오.').appendTo($('#ques2'));
		let json = [{text:'시작값 : ',input:'sta'},
				{text:'마지막값 :',input:'end'}]
		$.each(json, (i,j)=> {
			$('<label/>').html(j.text).appendTo($('#ques2'));
	   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques2'));
	   	$('<br/>').appendTo($('#ques2'));
		});
		$('<button/>')
		.addClass('btn btn-primary')
		.attr({type:'button'})
		.html('결과보기')
		.appendTo($('#ques2'))
		.click(e=>{
			let a = $('<h6/>').attr({id:'checker2'});
			$('#checker2').remove();
			if(($.fn.zeroChecker(
		        [$('#sta').val(),
		        $('#end').val()]))){
				a.html('빈칸을 채우세요').appendTo($('#ques2'));
			}else{
	    	let sta = $('#sta').val()*1;
	    	let end = $('#end').val()*1;
	    	let sum = 0;
	    	let i =1;
	    	let f =1;
	    	while(i<end){
	    		i++;
	    		f*=i;
	    		sum+=f;
	    		console.log(sum);
	    	}
	    	a.html('결과값 : '+sum).appendTo($('#ques2'));
			}
		});
	});
	
	$('<a/>')
	.attr({href : '#'})
	.html('sandGlass')
	.appendTo($('#sandGlass'))
	.click(e=>{
		$t__r2.empty();
		$('<div/>').attr({id:'ques2'}).appendTo($t__r2);
		$('<h4/>').html('sandGlass을  구하시오.').appendTo($('#ques2'));
		let json = [{text:'시작값 : ',input:'sta'},
				{text:'마지막값 :',input:'end'}]
		$.each(json, (i,j)=> {
			$('<label/>').html(j.text).appendTo($('#ques2'));
	   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques2'));
	   	$('<br/>').appendTo($('#ques2'));
		});
		$('<button/>')
		.addClass('btn btn-primary')
		.attr({type:'button'})
		.html('결과보기')
		.appendTo($('#ques2'))
		.click(e=>{
			let a = $('<h6/>').attr({id:'checker2'});
			$('#checker2').remove();
			if(($.fn.zeroChecker(
		        [$('#sta').val(),
		        $('#end').val()]))){
				a.html('빈칸을 채우세요').appendTo($('#ques2'));
			}else{
	    	let sta = $('#sta').val()*1;
	    	let end = $('#end').val()*1;
	    	let sum = 0;
	    	let i =1;
	    	let f =1;
	    	while(i<end){
	    		i++;
	    		f*=i;
	    		sum+=f;
	    		console.log(sum);
	    	}
	    	a.html('결과값 : '+sum).appendTo($('#ques2'));
			}
		});
	});
	
	$('<a/>')
	.attr({href : '#'})
	.html('snail')
	.appendTo($('#snail'))
	.click(e=>{
		$t__r2.empty();
		$('<div/>').attr({id:'ques2'}).appendTo($t__r2);
		$('<h4/>').html('snail를 구하시오.').appendTo($('#ques2'));
		let json = [{text:'시작값 : ',input:'sta'},
				{text:'마지막값 :',input:'end'}]
		$.each(json, (i,j)=> {
			$('<label/>').html(j.text).appendTo($('#ques2'));
	   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques2'));
	   	$('<br/>').appendTo($('#ques2'));
		});
		$('<button/>')
		.addClass('btn btn-primary')
		.attr({type:'button'})
		.html('결과보기')
		.appendTo($('#ques2'))
		.click(e=>{
			let a = $('<h6/>').attr({id:'checker2'});
			$('#checker2').remove();
			if(($.fn.zeroChecker(
		        [$('#sta').val(),
		        $('#end').val()]))){
				a.html('빈칸을 채우세요').appendTo($('#ques2'));
			}else{
	    	let sta = $('#sta').val()*1;
	    	let end = $('#end').val()*1;
	    	let sum = 0;
	    	let i =1;
	    	let f =1;
	    	while(i<end){
	    		i++;
	    		f*=i;
	    		sum+=f;
	    		console.log(sum);
	    	}
	    	a.html('결과값 : '+sum).appendTo($('#ques2'));
			}
		});
	});
	
	
	$('<a/>')
	.attr({href : '#'})
	.html('diamond')
	.appendTo($('#diamond'))
	.click(e=>{
		$t__r2.empty();
		$('<div/>').attr({id:'ques2'}).appendTo($t__r2);
		$('<h4/>').html('diamond를  구하시오.').appendTo($('#ques2'));
		let json = [{text:'시작값 : ',input:'sta'},
				{text:'마지막값 :',input:'end'}]
		$.each(json, (i,j)=> {
			$('<label/>').html(j.text).appendTo($('#ques2'));
	   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques2'));
	   	$('<br/>').appendTo($('#ques2'));
		});
		$('<button/>')
		.addClass('btn btn-primary')
		.attr({type:'button'})
		.html('결과보기')
		.appendTo($('#ques2'))
		.click(e=>{
			let a = $('<h6/>').attr({id:'checker2'});
			$('#checker2').remove();
			if(($.fn.zeroChecker(
		        [$('#sta').val(),
		        $('#end').val()]))){
				a.html('빈칸을 채우세요').appendTo($('#ques2'));
			}else{
	    	let sta = $('#sta').val()*1;
	    	let end = $('#end').val()*1;
	    	let sum = 0;
	    	let i =1;
	    	let f =1;
	    	while(i<end){
	    		i++;
	    		f*=i;
	    		sum+=f;
	    		console.log(sum);
	    	}
	    	a.html('결과값 : '+sum).appendTo($('#ques2'));
			}
		});
	});
	
	$('<a/>')
	.attr({href : '#'})
	.html('zigzag')
	.appendTo($('#zigzag'))
	.click(e=>{
		$t__r2.empty();
		$('<div/>').attr({id:'ques2'}).appendTo($t__r2);
		$('<h4/>').html('zigzag를  구하시오.').appendTo($('#ques2'));
		let json = [{text:'시작값 : ',input:'sta'},
				{text:'마지막값 :',input:'end'}]
		$.each(json, (i,j)=> {
			$('<label/>').html(j.text).appendTo($('#ques2'));
	   	$('<input/>').attr({id : j.input, type:'text'}).appendTo($('#ques2'));
	   	$('<br/>').appendTo($('#ques2'));
		});
		$('<button/>')
		.addClass('btn btn-primary')
		.attr({type:'button'})
		.html('결과보기')
		.appendTo($('#ques2'))
		.click(e=>{
			let a = $('<h6/>').attr({id:'checker2'});
			$('#checker2').remove();
			if(($.fn.zeroChecker(
		        [$('#sta').val(),
		        $('#end').val()]))){
				a.html('빈칸을 채우세요').appendTo($('#ques2'));
			}else{
	    	let sta = $('#sta').val()*1;
	    	let end = $('#end').val()*1;
	    	let sum = 0;
	    	let i =1;
	    	let f =1;
	    	while(i<end){
	    		i++;
	    		f*=i;
	    		sum+=f;
	    		console.log(sum);
	    	}
	    	a.html('결과값 : '+sum).appendTo($('#ques2'));
			}
		});
	});*/