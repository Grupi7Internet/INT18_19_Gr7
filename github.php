<?php
	$e = "";
	$a = true;	
	$k=1;
	while($a){
		$a = file_get_contents("https://api.github.com/repos/Eltion/PHP/commits?page=".$k);
		$e .= $a;
		if(sizeof(json_decode($e)) < 1){
			break;
		}
	}
?>