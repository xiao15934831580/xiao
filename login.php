<?php
header("Content-type: text/html; charset=utf-8");
// 指定允许其他域名访问,解决CROS
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');

	$username=$_GET["username"];
//	$password=$_POST["password"];
	//建立连接
		$conn = mysql_connect("localhost","root","123");
	if($conn){
			//选择数据库
			mysql_select_db("dbxiaomi",$conn);
			//执行SQL
		  $sqlstr="select * from mi where username='".$username."' ";
		  $result= mysql_query($sqlstr);
		   $rows =mysql_num_rows($result);
		  //断开连接
		   mysql_close($conn);
			//输出结果
			if( $rows>0){
				echo '验证成功，用户名密码匹配成功';
			}else{
				echo '验证失败，用户名密码不匹配';
			};
			
			
	}else{
		echo '连接数据库失败';
	};
?>