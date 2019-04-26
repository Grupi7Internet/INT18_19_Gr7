<?php 
	require('connectDB.php'); 

	if(isset($_GET["email"])){
		$email = $_GET["email"];

		$link = md5($email."genci".date("H"));

		
	}elseif (isset($_GET["activation"])) {
		
	}	
?>