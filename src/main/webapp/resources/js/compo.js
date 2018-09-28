"use strict";
var ui={
	div : x =>{return $('<div/>').attr(x);},
	span : x=>{return $},
	anchor : x=>{ //ui.anchor({id:'', txt:''});
		return $('<a/>').attr({href : '#', id:x.id}).html(x.txt);},
	ul:x=>{  //ui.ul({id:'', len:''});
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
	},
	table : x =>{
		let d = $('<div/>').addClass('panel panel-'+x.type);
		let ph = $('<div/>').addClass('panel-heading').html(x.head);
		let p = $('<p/>').html(x.body);
		let pb = $('<div/>').addClass('panel-body');
		let thead = $('<thead/>').addClass('thead-dark');
		let t = $('<table/>').attr({id:x.id}).addClass(x.clazz);
		let tr = $('<tr/>');
		$.each(x.list,(i,j)=>{
			$('<th/>').html(j).appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		ph.appendTo(d);
		pb.appendTo(d);
		p.appendTo(pb)
		t.appendTo(d);
		return d;
	},
	page : x =>{
		return $('<ul/>').addClass('pagination').appendTo($('<nav/>').attr('aria-label','...'));
	}  // page END 
} // ui END	