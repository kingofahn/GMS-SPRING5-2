<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="contentBox">
		<form id = "joinForm" name="joinForm" style="width: 450px;margin:50px auto">
			<input type="text" name="userid" placeholder="아이디를 입력해주세요" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;"/> <br>
			<input type="text" name="email" placeholder="이메일을 입력해주세요" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;"/> <br>
			<input type="text" name="name" placeholder="이름을 입력해주세요" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;" /> <br>
			<input type="text" name="phone" placeholder="전화번호를 입력해주세요" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;" /> <br>
			<input type="password" name="password" placeholder="비밀번호를 입력해주세요(8~20자)" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;"/>	<br>
			<input type="text" name="ssn" placeholder="생년월일을 입력해주세요(ex900115-1)" required="required" style="font-size: 15px; width: 410px; height:50px; text-align: center;"/><br>

			<select name="roll" id="roll" style="font-size: 15px; width: 410px; height:50px">
			<option value="none">역할을 선택해주세요</option>
			<option value="leader" >팀장</option>
			<option value="front">프론트개발</option>
			<option value="back">백단개발</option>
			<option value="android">안드로이드개발</option>
			<option value="minfe">민폐</option>
			</select>
			
			<select name="teamid" id="teamid" style="font-size: 15px; width: 410px; height:50px">
			<option value="none">팀을 선택해주세요</option>
			<option value="nolja">야놀자</option>
			<option value="jieunHouse">지은하우스</option>
			<option value="turtleKing">거북왕</option>
			<option value="coddingZzang">코딩짱</option>
			<option value="none" >없음</option>
			</select><br>
			<div style="width: 410px; height:50px; font-size: 13px; border: 1px solid grey;">
			<br>
			<input type="checkbox" name="subject" value="java" checked="checked"/> Java
			<input type="checkbox" name="subject" value="clang"/> C언어
			<input type="checkbox" name="subject" value="JSP"/>	JSP
			<input type="checkbox" name="subject" value="PHP"/> PHP
			<input type="checkbox" name="subject" value="nodejs"/> NodeJS
			<input type="checkbox" name="subject" value="linux"/> Linux
			<input type="checkbox" name="subject" value="html"/> HTML
			<input type="checkbox" name="subject" value="spring"/> Spring
			</div>
 			<a id="joinForm_Btn">
				<img src="${ctx}/resources/img/join_btn.jpg">
			</a> 
		</form>
		</div>
		
<script>
		$('#joinForm_Btn').click(function(){
		    $('#joinForm').attr({action:"${ctx}/member/add", method:"POST"}).submit();
		});
</script>			