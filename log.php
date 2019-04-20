<?php
	class User {
		
		private $ip;
		private $country;
		private $time;
		private static $count;

		function __construct(){
			$this->ip = $_SERVER['REMOTE_ADDR'];
			$this->info = json_decode(file_get_contents("https://ipinfo.io/{$this->ip}/json"));
			$this->country = (empty($info->country)) ? "Localhost" : $info->country;
			$this->time = date("d/m/Y G:i:s");
		}

		

		
	}	
?>