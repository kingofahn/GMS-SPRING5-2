<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <!-- Icons Grid -->
    <section class="features-icons bg-light text-center">
      <div class="container">
        <div class="row">
          
          <div class="col-lg-4" id="mypage_btn">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
	              <h3> 마이페이지 </h3>
              <p class="lead mb-0"> ${user.name}님의 마이페이지 입니다.<br>
              						</p>
            </div>
          </div>
          
          <div class="col-lg-4" id="board_write">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
	              <h3> 게시글쓰기  </h3>
              		<p class="lead mb-0"> 게시글 쓰러가기 입니다.</p>
            </div>
          </div>
          
          
          <div class="col-lg-4" id="board_list">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
	              <h3> 게시글 목록보기  </h3>
              		<p class="lead mb-0"> 게시글 보러 가기 입니다.</p>
            </div>
          </div>
          
          
          <div class="col-lg-4" id="modify_btn">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
	              <h3> 회원 수정 </h3>
              <p class="lead mb-0"> ${user.userid}님의 개인정보를 <br> 수정하세요<br>
              						</p>
            </div>
          </div>
          
          <div class="col-lg-4" id="logout_btn">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
   			  </div>
            	  <h3> 로그아웃</h3>
              <p class="lead mb-0"> ${user.name} 님 로그아웃하여 <br>서비스를 종료하세요</p>
            </div>
          </div>
          
          <div class="col-lg-4" id="remove_btn">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <h3>회원 탈퇴</h3>
              <p class="lead mb-0"> 회원 탈퇴 입니다.<br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
<script>
/*  	user.session({userid : '${user.userid}',
	  		      teamid:"${user.teamid}",
			      name:"${user.name}",
			      ssn:"${user.ssn}",
			      roll:"${user.roll}",
			      password:"${user.password}",
			      age:"${user.age}",
			      gender:"${user.gender}",
			      phone:"${user.phone}",
			      subject:"${user.subject}"
				}); */
	$('#mypage_btn').click(function(){   
		location.href = '${ctx}/move/auth/member/retrieve/';
	});
 	$('#modify_btn').click(function(){
		location.href = '${ctx}/move/auth/member/modify';
	});
	$('#logout_btn').click(function(){   
		location.href = '${ctx}/member/logout';
	});
	$('#remove_btn').click(function(){   
		location.href = '${ctx}/move/auth/member/remove';
	});
 	$('#board_write').click(function(){
 		location.href = '${ctx}/move/auth/board/register';
 	});
 	$('#board_list').click(function(){
 		location.href = '${ctx}/move/auth/board/listAll';
 	});
 	
</script>