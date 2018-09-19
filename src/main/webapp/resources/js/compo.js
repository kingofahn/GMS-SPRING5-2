"use strict";
var ui={
	div : x =>{return $('<div/>').attr(x);},
	span : x=>{return $},
	anchor : x=>{ //ui.anchor({txt:'test'});
		return $('<a/>').attr({href : '#'}).html(x.txt);},
	ul:x=>{ 
		let y =$('<ul>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({id : x.id+'-'+i
				}).appendTo(y);
		}
       	return y;
	},
	
	input : x=>{ // id,val
		let y = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>').appendTo(y);
		$("<input/>").attr({
			id : x.id,
			type: x.txt,
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(y);
		return y;
	},	
	inputGroupPrepend : x =>{
		return '<div class="input-group mb-3">'
		 + '<div class="input-group-prepend">'
		 + '<span class="input-group-text" id="basic-addon1">@</span>'
		 + '</div>'
		 + '<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		 + '</div>'
	},
	
	label : x=>{
		return $('<label/>')
				.attr('for',x.id).text(x.txt)
	},
	
	btn : x=> {
		return $('<button/>').attr('type','button')
		.addClass('btn btn-'+x.clazz)
		.html(x.txt)  // return 타입은 항상 DOM객체이다.
/*	------------------------------------------------------------------------	
		<button type="button" class="btn btn-primary">Primary</button>
		primary(blue)
		secondary(gray)
		success(green)
		danger(red)
		warning(yellow)
		info(green)
		light(white)
		dark(black)
		link(trans)
------------------------------------------------------------------------*/
	}
}
