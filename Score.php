<?php
	//WriteNewScore();
	session_start();
	$table = "";
	if(isset($_POST['score'])){
		WriteNewScore();
		die();
	}else{
		ReadFile1();
	}
		}
	}

?>

</body>
</html>