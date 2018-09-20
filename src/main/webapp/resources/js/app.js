"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})(); // app end
app.main =(()=>{
	var w, nav, header, content, footer, ctx, script, style, img, login;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		nav=script+'/nav.js';
		header=script+'/header.js';
		content=script+'/content.js';
		footer=script+'/footer.js';
		login=script+'/login.js';
		onCreate();
	}; // init end
	var onCreate =()=>{
		setContentView();
	};  // onCreate end
	var setContentView =()=>{
		$.when(
/*			$.getScript($.script()+'/nav.js'),
			$.getScript($.script()+'/header.js'),
			$.getScript($.script()+'/content.js'),
			$.getScript($.script()+'/footer.js'),
			$.getScript($.script()+'/login.js'),*/
			$.getScript(header),
			$.getScript(nav),
			$.getScript(content),
			$.getScript(footer),
			$.Deferred(x=>{
				$(x.resolve);
			})
		).done(()=>{
			w.html(headerUI()
					+navUI()
					+contentUI()
					+footerUI()
					);
			$('#login_btn').click(e=>{
				/*e.preventDefault();*/
				app.permision.login();
			});
			$('#join_btn').click(e=>{
				/*e.preventDefault();*/
				app.permision.join();
			});
			$('#board').click(e=>{
				/*e.preventDefault();*/
				app.board.init();
			})
		})
		.fail(x=>{
			
		}); // fail end
	}; // setContentView end
	return {init:init};
})();  // app.main end
app.board =(()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		$('#header').remove();
		$('#content').empty();
	};
	return {init:init};
})();  // app.board end
app.permision = (()=>{
	var login = ()=>{
		/*$('#header').remove();*/
		/*$('#content').empty();*/
		$.getScript($.script()+'/footer.js');
		$.getScript($.script()+'/content.js');
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/login.js',()=>{
				$('#content').html(loginUI()).append(footerUI());
				ui.anchor({id:'login_form_btn', txt:'로 그 인'})
				/*.css({'width':'300px'})*/
				.addClass('btn btn-primary w-300px')
				.appendTo($("#content-box"))
				.click(e=>{
					if(!$.fn.nullChecker([$('#userid').val(), $('#password').val()])){
						$.ajax({
							url : $.ctx() + '/member/login/',
							method : 'post',
							contentType : 'application/json',
							data : JSON.stringify({userid : $('#userid').val(),
												password : $('#password').val()	
																			}),
							success : d=>{
								console.log('AJAX 성공이다')
								console.log('ID 판단 :::' + d.ID)
								console.log('PW 판단 :::' + d.PW)
								console.log('MBR 판단 :::' + d.MBR)
								if(d.ID==="WRONG"){
									app.permision.login();
									alert('존재하지 않는  ID 입니다.');
								} else if(d.PW==="WRONG"){	
									app.permision.login();
									alert('비밀번호 오류 입니다.');
								} else {
									app.router.home();
									alert('로그인 성공 하였습니다');
								}
							},
							error : (m1,m2,m3)=>{
								alert('error : '+m1);
							} /* error END*/
						}); /*AJAX END*/
					} /*nullchecker END*/
				}); /*login_form_btn END*/
			}) /*getScript END*/
		});
	} /*login END*/
	
	var join = ()=>{
		$.getScript($.script()+'/footer.js');
		$.getScript($.script()+'/join.js');
		$.getScript($.script()+'/login.js');
		$.getScript($.script()+'/compo.js',()=>{
			$('#content').html(joinUI()).append(footerUI());
/*			$("[name='subject']")
			.change(function(){
				alert($(this).val());
			});*/
/*			let arr = $("[name='subject']");
			for(var i=0; arr.length; i++){
				alert(arr[i])
			}*/
			

			
			
			ui.anchor({id:'join_form_btn', txt:'회 원 가 입'})
			.addClass('btn btn-primary w-300px')
			.appendTo($("#content-box"))
			.click(e=>{
				if(!$.fn.nullChecker([$('#userid').val(), $('#password').val(),$('#name').val(),
					$('#ssn').val(),$('#email').val(),$('#phone').val(),$('#teamid').val(),
					$('#roll').val(),$('#subject').val()
					])){
						alert('join버튼 클릭 ok');
						var arr=[];
						var sub = $("[name='subject']")
						let i;
						let a = '';
						for(i of sub){
							if(i.checked){
								alert('선택된 과목::' + i.value)
								arr.push(i.value);
							}
						}
						$.ajax({
							url : $.ctx() +'/member/join/',
							method :'post',
							contentType : 'application/json',
							data : JSON.stringify({userid : $('#userid').val(),
													password : $('#password').val(),
													name :$('#name').val(),
													ssn :$('#ssn').val(),
													email :$('#email').val(),
													phone:$('#phone').val(),
													teamid:$('[name=teamid]:checked').val(),
													roll:$('#roll').val(),
													subject: JSON.stringify(arr)
							}),
							success : d=>{
								console.log('가입성공');
								app.permision.login();
								/*$('#content').html(loginUI()).append(footerUI());*/
							},
							error : (m1,m2,m3)=>{
								alert('에러발생 1'+m1);
							} /* error END*/
				}) /*ajax END*/
				} // nullcheck end
			}) // click end
		}); // compo end
	} /*join END*/
	return {login : login, join : join}
})(); // app.permision  end
app.router = {
	init :x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패')});
				app.main.init();
			}
		); // getScript end
	}, // app.router end
	home : ()=>{
		$.when(
				$.getScript($.script()+'/header.js'),
				$.getScript($.script()+'/nav.js'),
				$.getScript($.script()+'/content.js'),
				$.getScript($.script()+'/footer.js'),
				$.Deferred(x=>{
								$(x.resolve);
							})
						).done(()=>{
							$('#wrapper').html(headerUI()
									+navUI()
									+contentUI()
									+footerUI()
									);
							$('#login_text').html('이용해주셔 감사드립니다.');
							$('#join_text').html('마이페이지로 이동하여 회원정보를 확인하세요');
							$('#login_label').html('로그아웃').click(e=>{
								app.main.init();
							});
							$('#join_label').html('마이페이지').click(e=>{
							});
							$('#login_btn').click(e=>{
								alert('logout버튼 클릭');
								app.main.init();
							});
							$('#board').click(e=>{
								app.board.init();
							})
						})
						.fail(x=>{
						}); // fail end
	} // home end
}; // app.router end