
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
	<link rel="stylesheet" type="text/css" href="styles/addtodb.css">
<body>
		<div class="main">
		<form action="add.php" method="POST" enctype="multipart/form-data">
				
				<select id="aaa" name="type" onchange="addtodb()" >
					<option value="Book">Literature</option>
					<option value="Video">Video</option>
					<option value="Gadgets">Gadgets</option>
					<option value="Course">Course</option>
				</select>

				

				<div id="Photo" style="display: none;">
					<table cellspacing="5">
						<tr><td>Title: </td> <td><input type="text" name="Gtitle"> </td></tr>
						<tr><td>Cover: </td> <td><input type="text" name="Gimg"> </td></tr>
						<tr><td>Source: </td> <td><input type="text" name="Glink"> </td></tr>

						
					</table>

				</div>

				
				<input id="file" type="file" name="ff" >
				<br><br>
				<input type="submit" name="">
			
		</form>
		</div>


</body>
</html>