<?php 
     session_start();
    require("connectDB.php");
    $loggedin = isUserLogedIn();

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles/books.css">
	<link rel="stylesheet" type="text/css" href="styles/header.css">
    <link rel="stylesheet" type="text/css" href="styles/footer.css">
	<link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet"> 
	<script src="scripts/jquery.min.js"></script>
    <script src="scripts/jquery-ui.min.js"></script>
    <script src="scripts/books.js"></script>
	 <style type="text/css">
    