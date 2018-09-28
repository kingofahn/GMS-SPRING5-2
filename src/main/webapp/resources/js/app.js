"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})(); // app END
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
	}; // init END
	var onCreate =()=>{
		setContentView();
	};  // onCreate END
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
			
		}); // fail END
	}; // setContentView END
	return {init:init};
})();  // app.main END

app.board =(()=>{
	var w, nav, header, content, footer, ctx, script, style, img;
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
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		/*$('#header').remove();*/
		$('#content').empty();
		app.service.boards(1);
	}; // setContentView END
	return {init:init};
})();  // app.board END

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
									app.router.home({id:$('#userid').val(), pageNo:1});
								}
							},
							error : (m1,m2,m3)=>{
								alert('error : '+m1);
							} // error END
						}); // AJAX END
					} // nullchecker END
				}); // login_form_btn END
			}) // getScript END
		}); //click END
	} // login END
	
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
						var arr=[];
						var sub = $("[name='subject']")
						let i;
						let a = '';
						for(i of sub){
							if(i.checked){
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
								// $('#content').html(loginUI()).append(footerUI());
							},
							error : (m1,m2,m3)=>{
								alert('에러발생 1'+m1);
							} // error END
				}) // ajax END
				} // nullcheck END
			}) // click END
		}); // compo END
	} // join END
	return {login : login, join : join}
})(); // app.permision  END

app.service={
	boards :  x=>{
		$.getJSON($.ctx()+'/boards/'+x, d=>{
			$.getScript($.script()+'/compo.js',()=>{
				$('#content').empty();
				let json = {
						type : 'default',
						id : 'table',
						head : '게시판',
						body : '오픈게시판...누구든지 사용가능',
						list : ['NO','제목','내용','글쓴이','작성일','조회수'],
						clazz : 'table table-striped'  //  table table-bordered(일반)  table table-striped'(얼룩말무늬)
				};
				(ui.table(json))
				.appendTo($('#content'));
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
					$('<td/>').attr('width','5%').html(j.bno),
					$('<td/>').attr('width','10%').html(j.title),
					$('<td/>').attr('width','50%').html(j.content),
					$('<td/>').attr('width','10%').html(j.writer),
					$('<td/>').attr('width','10%').html(j.regdate),
					$('<td/>').attr('width','5%').html(j.viewcnt)
					).appendTo($('tbody'));
				}); // $.each END
				ui.page({}).appendTo($('#content'));
				let ul = $('.pagination');
				let existPrev = d.page.existPrev;
				let existNext = d.page.existNext;
				let prev = '';
				let next = '';
				prev =(!existPrev)?'disabled':'';
				next =(!existNext)?'disabled':'';
				let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
				let nextli = $('<li id="next"  class="page-item '+next+'""><span class="page-link">▶</span>');
				preli.appendTo(ul).click(e=>{
					if(existPrev){
					app.service.boards(d.page.prevBlock);
					} 
				});// preli.appendTo(ul).click) END	
				for(let i=d.page.beginPage;i<=d.page.endPage;i++){
					$('<li class="page-item"/>')
					.addClass((i==d.page.pageNumber)?'active':'')
					.append($('<span/>')
					.addClass('page-link')
					.html(i)).appendTo(ul)
					.click(e=>{
						app.service.boards(i);
					});
				}
				nextli.appendTo(ul).click(e=>{
					if(existNext){
						app.service.boards(d.page.nextBlock);
					} 
				});// nextli.appendTo(ul).click END 
				$('.page-link').attr('style',"cursor:pointer");
			}); // $.$.getScript($.script()+'/compo.js' END
		}); // getJSON END
	}, // boards END
	
	my_board : x=>{
		$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo, d=>{
			$.getScript($.script()+'/compo.js',()=>{
				$('#content').empty();
				let json = {
						type : 'default',
						id : 'table',
						head : '게시판',
						body : '오픈게시판...누구든지 사용가능',
						list : ['NO','제목','내용','글쓴이','작성일','조회수'],
						clazz : 'table table-striped'  //  table table-bordered(일반)  table table-striped'(얼룩말무늬)
				};
				(ui.table(json))
				.appendTo($('#content'));
				$.each(d.list,(i,j)=>{
					$('<tr/>').append(
					$('<td/>').attr('width','5%').html(j.bno),
					$('<td/>').attr('width','10%').html(j.title),
					$('<td/>').attr('width','50%').html(j.content),
					$('<td/>').attr('width','10%').html(j.writer),
					$('<td/>').attr('width','10%').html(j.regdate),
					$('<td/>').attr('width','5%').html(j.viewcnt)
					).appendTo($('tbody'));
				}); // $.each END
				ui.page({}).appendTo($('#content'));
				let ul = $('.pagination');
				let existPrev = d.page.existPrev;
				let existNext = d.page.existNext;
				let prev = '';
				let next = '';
				prev =(!existPrev)?'disabled':'';
				next =(!existNext)?'disabled':'';
				let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
				let nextli = $('<li id="next"  class="page-item '+next+'""><span class="page-link">▶</span>');
				console.log('d.page.beginPage : ' + d.page.beginPage)
				console.log('d.page.endPage : ' + d.page.endPage)
				preli.appendTo(ul).click(e=>{
					if(existPrev){
					app.service.my_board({id:x.id,pageNo:d.page.prevBlock});
					} 
				});// preli.appendTo(ul).click) END				
				for(let i=d.page.beginPage;i<=d.page.endPage;i++){
					$('<li class="page-item"/>')
					.addClass((i==d.page.pageNumber)?'active':'')
					.append($('<span/>')
					.addClass('page-link')
					.html(i)).appendTo(ul)
					.click(e=>{
						app.service.my_board({id:x.id, pageNo:i});
					});
				}
					nextli.appendTo(ul).click(e=>{
						if(existNext){
						app.service.my_board({id:x.id,pageNo:d.page.nextBlock});
						} 
					});// nextli.appendTo(ul).click END 
				$('.page-link').attr('style',"cursor:pointer");
			}); // $.$.getScript($.script()+'/compo.js' END
		}); // getJSON END
	} // my_board END
	
}; // app.service  END

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
	home : x =>{
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
								app.service.my_board({id:x.id, pageNo:1});
							})
						})
						.fail(x=>{
						}); // fail END
	} // home END
}; // app.router END