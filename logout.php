<?php 
	session_start();
	unset($_SESSION['user_id']);
	if(isset($_COOKIE['u_token'])){
		
	}
	session_destroy();
	header("Location: index.php");
	die();
?>