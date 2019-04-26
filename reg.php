<?php 
	require('connectDB.php'); 

	if(isset($_GET["email"])){
		$email = $_GET["email"];

		$link = md5($email."genci".date("H"));

		$data = array('TO' => $email, 'LINK' => urlencode("http://localhost/projekti/reg.php?activation=$link&e=$email"));

		$query = "UPDATE infos SET confirmed = '$link' WHERE email = '$email';";
		mysqli_query($conn, $query);

		$options = array(
		    'http' => array(
		        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		        'method'  => 'POST',
		        'content' => http_build_query($data)
		    )
		);
		
		
	}elseif (isset($_GET["activation"])) {
		
	}	
?>