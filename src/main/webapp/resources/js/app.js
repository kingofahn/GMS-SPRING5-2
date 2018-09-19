"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
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
	};
	var onCreate =()=>{
		setContentView();
	};
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
			
		});
	};
	return {init:init};
})();
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
})();
app.permision = (()=>{
	var login = ()=>{
		/*$('#header').remove();*/
		/*$('#content').empty();*/
		$.getScript($.script()+'/footer.js');
		$.getScript($.script()+'/content.js');
		$.getScript($.script()+'/login.js',()=>{
			$('#content').html(loginUI()).append(footerUI());
			$('#login_form_btn').click(e=>{
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
							alert('존재하지 않는  ID 입니다.');
							$('#content').html(loginUI()).append(footerUI());
						} else if(d.PW==="WRONG"){	
							$('#content').html(loginUI()).append(footerUI());
							alert('비밀번호 오류 입니다.');
						} else {
							app.router.home();
							alert('로그인 성공 하였습니다');
						}
					},
					error : (m1,m2,m3)=>{
						alert('에러발생 1'+m1);
						alert('에러발생 2'+m2);
						alert('에러발생 3'+m3);
					/*=================갔다온 후==================*/
					} /* error END*/
				}); /*AJAX END*/
			}); /*login_form_btn END*/
		}) /*getScript END*/
	} /*login END*/
	var join = ()=>{
		$.getScript($.script()+'/footer.js');
		$.getScript($.script()+'/login.js');
		$.getScript($.script()+'/join.js',()=>{
			$('#content').html(joinUI());
			$('#join_form_btn').click(e=>{
				alert('join버튼 클릭 ok');
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
											teamid:$('#teamid').val(),
											roll:$('#roll').val(),
											subject: $('#subject').val()
					}),
					success : d=>{
						console.log('가입성공');
						$('#content').html(loginUI()).append(footerUI());
					},
					error : (m1,m2,m3)=>{
						alert('에러발생 1'+m1);
						alert('에러발생 2'+m2);
						alert('에러발생 3'+m3); 
						 
					} /* error END*/
				}); /*AJAX END*/
			}); /*login_form_btn END*/
		}) /*getScript END*/
	} /*join END*/
	return {login : login, join : join}
})();
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
		);
	},
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
							
						});
	}
};


/*"use strict";
var app  = app || {};
app =(()=>{
	var init =x=>{
		console.log('step 1 : '  + x)
		app.router.init(x);
	};
	return{init : init};
})();

app.main =(()=>{
	var w,nav, header, content, footer, ctx, script, style, img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		nav = script + '/nav.js';
		header = script+'/header.js';
		content = script + '/content.js';
		footer = script + '/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
      $.when(
		   $.getScript($.script()+'/header.js'),
  		   $.getScript($.script()+'/nav.js'),
           $.getScript($.script()+'/content.js'),
           $.getScript($.script()+'/footer.js'),
           $.Deferred(y=>{
               $(y.resolve);
           })
       ).done(z=>{
           w.html(
        		   headerUI()
        		   +navUI()
                   +contentUI(ctx)
                   +footerUI()
           );
           $('#login_btn').click(e=>{
        	   
        	   e.preventDefault();
        	   app.permission.login();
        	   console.log('step4::: 로그인 성공');
           });
           $('#board').click(e=>{
        	   app.board.init();
           });
       })
       .fail(x=>{
           console.log('로드 실패');
       });
    };
	return{init : init};
})();

app.board =(()=>{
	var w,nav, header, content, footer, ctx, script, style, img;
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
	return{init:init};
})();

app.permission = (()=>{
    var login =()=>{
        alert('login');
        //$('#header').remove();
        $('#content').empty();
        $.getScript($.script()+"/login.js", ()=>{
            $('#content').html(loginUI());
        })
    };
    return {login : login};
})();



app.router = {
	    init : x =>{
	        $.getScript(x+'/resources/js/router.js',  // 외부의 JS 파일을 호출하는 것. 자바로치면 import의 의미.
	                ()=>{
	                    $.extend(new Session(x));        //확장. JS 객체기반언어
	                    $.getScript($.ctx()+'/resources/js/util.js')
	                    .done(x=>{
                    		console.log('실행');
                    		app.permission.login();
                    		})
	                    .fail(x=>{
	                    	console.log('실패')});
	                    app.main.init();
	                });
    }
};
*/
/*app=(x=>{
	init : x =>{
		console.log('step 1')
		app.router.init(x);
		app.onCreate();          // 생성자 느낌
	};
	var onCreate =()=>{
		console.log('step 3');
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href = app.x()+'/move/public/member/login';
		});
		$('#join_btn').click(()=>{   
			location.href = app.x()+'/move/public/member/add';
		});
		$('#logout_btn').click(()=>{   
			location.href = app.x()+'/member/logout';
		});
		$('#mypage_btn').click(()=>{   
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/retrieve';
		});
		$('#modify_btn').click(()=>{
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/modify';
		});
		$('#remove_btn').click(()=>{   
			location.href = app.x()+'/member/retrieve/'+user.get('userid')+'/remove';
		});
		$('#loginForm_btn').click(()=>{
			$('#userLoginForm').attr({action:app.x()+"/member/login", method:"POST"}).submit();
        });
		$('#modifyForm_btn').click(()=>{
			$('#modifyForm').attr({action:app.x()+"/member/modify/", method:"POST"}).submit();
        });
		$('#removeForm_btn').click(()=>{
			$('#removeForm').attr({action:app.x()+"/member/remove/", method:"POST"}).submit();
        });	
		$('#joinForm_Btn').click(()=>{
            $('#joinForm').attr({action:app.x()+"/member/add", method:"POST"}).submit();
        });
	};
	setContentView : ()=>{ // 여기에 코딩하는 부분은 동적ui부분이다.
		console.log('step 4');
		}
	return{
		init : init
	};
})();*/