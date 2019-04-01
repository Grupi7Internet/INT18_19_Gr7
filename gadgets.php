<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="styles/gadgets.css">
    <link rel="stylesheet" type="text/css" href="styles/header.css">
	 <link rel="stylesheet" type="text/css" href="styles/footer.css">
    <script src="scripts/jquery.min.js"></script>
	<title>Gadgets</title>
	<style>
	footer{
		margin:0 auto;
	}

    .LinksAboutTech ul {
        list-style: none;
        padding: 0px;
        text-align: center;
    }

    .LinksAboutTech  ul li {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: blue;
        padding: 5px;
        border-radius: 40px;
        text-align: center;
        
    }

    .LinksAboutTech ul li a {
        font-weight: bolder;
        color: white;
    }
    
    a:hover {
        color: white;
    }

	footer p{
			font-family: arial;
			
			font-weight: bold;
			background:linear-gradient(45deg, #09009f, #00ff95 80%);
            -webkit-background-clip: text;
  			-webkit-text-fill-color: transparent;
   			transition: 0.3s;
			}
		
	</style>
	<script>
		var a=false;
        var teksti; 
		$(document).ready(function(){
  		$("#h2set").on("click",function(){
  		
	  		if(a)
	  		{
                teksti=$("#h2set").text();
		    	$("#h2set").text("Getting new gadgets is part of the right way back to School.");
		    	a=false;
	    	}
	    	else 
	    	{
		    	$("#h2set").text(teksti);
		    	a=true;
	    	}
    	});
        });

	</script>
	
    <script type="text/javascript">
      
  </script>
</head>
<body style="color: rgba(0,0,0,.65)" >
<?php require("header.php"); ?>    

       

        <?php include("footer.php"); ?>
</body>
</html>