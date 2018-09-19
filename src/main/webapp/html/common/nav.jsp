<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <!-- Icons Grid -->
    <section class="features-icons bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" id="login_btn">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
   			  </div>
            	  <h3>로그인</h3>
              <p class="lead mb-0">로그인하여 <br>서비스를 이용하세요</p>
            </div>
          </div>
          <div class="col-lg-4" id="join_btn">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
	              <h3> 회원가입 </h3>
              <p class="lead mb-0">보다 나은 서비스를 위하여<br>
              						회원가입 하세요.</p>
            </div>
          </div>
          <div class="col-lg-4" id="admin_btn">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <h3>관리자</h3>
              <p class="lead mb-0" id="admin_btn">관리자 이용 메뉴입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <script>
	$('#login_btn').click(function (){
		location.href = '${ctx}'+'/move/public/member/login';
	});
	$('#join_btn').click(()=>{   
		location.href = '${ctx}' +'/move/public/member/add';
	});
    </script>
    	
    
    