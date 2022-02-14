<!DOCTYPE HTML>
<html>
<head>
	<title>API 폼전송</title>
	<meta charset='utf-8'>
	
</head>	
<body>
<div id='wrap'>
	<h1>폼 전송이 완료 되었습니다.</h1>
	<ul>
		<li><div>이름 : 	   <? echo $_POST['irum']; ?>	   </div></li>
		<li><div>메일 : 	   <? echo $_POST['mail']; ?>	   </div></li>
		<li><div>좋아하는 것 : <? echo $_POST['interested']; ?></div></li>
		<li><div>메시지 내용 : <? echo $_POST['message']; ?>   </div></li>
	</ul>
	
	
	
</div>
</body>
</html>