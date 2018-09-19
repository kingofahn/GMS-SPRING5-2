<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="contentBox">
<h1>${user.userid}님의 회원 탈퇴 페이지</h1>
	<form id="removeForm" name="removeForm">
		비밀번호 재입력 
		<input type="password" name="password" id="password" placeholder="비밀번호를  입력(8~20자)" />
		<input type="button" id="removeForm_btn" value="Delete!!!"/>
	</form>
</div>

<script>
$('#removeForm_btn').click(function(){
	$('#removeForm').attr({action:"${ctx}/member/remove/", method:"POST"}).submit();
});	
</script>
