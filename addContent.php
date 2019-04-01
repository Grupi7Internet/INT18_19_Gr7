
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

				<div id="Literature">
					<table cellspacing="5">
						<tr><td>Title: </td> <td><input type="text" name="title"> </td></tr>
						<tr><td>Autori: </td> <td><input type="text" name="author"> </td></tr>
						<tr><td>Cover: </td> <td><input type="text" name="img"></td></tr>
						<tr><td>Description: </td> <td><input type="text" name="description"></td></tr>
						<tr><td>Pages: </td> <td><input type="text" name="pages"></td></tr>	
						<tr><td>Rating: </td> <td><input type="text" name="rating"></td></tr>		
					</table>
				</div>

				<div id="Video" style="display: none;">
					<table cellspacing="5">
						<tr><td>Title: </td> <td><input type="text" name="Vtitle"> </td></tr>
						<tr><td>Autori: </td> <td><input type="text" name="Vauthor"> </td></tr>
						<tr><td>Cover: </td> <td><input type="text" name="Vimg"></td></tr>
						<tr><td>Description: </td> <td><input type="text" name="Vdescription"></td></tr>
						<tr><td>Length: </td> <td><input type="text" name="Vlength"></td></tr>	
						<tr><td>Rating: </td> <td><input type="text" name="Vrating"></td></tr>	
						<tr><td>Course: </td> <td><input type="text" name="Vcourse"></td></tr>	
					</table>
				</div>

				<div id="Photo" style="display: none;">
					<table cellspacing="5">
						<tr><td>Title: </td> <td><input type="text" name="Gtitle"> </td></tr>
						<tr><td>Cover: </td> <td><input type="text" name="Gimg"> </td></tr>
						<tr><td>Source: </td> <td><input type="text" name="Glink"> </td></tr>

						
					</table>

				</div>

				<div id="Course" style="display: none;">
					<table cellspacing="5">
						<tr><td>Title: </td> <td><input type="text" name="Ctitle"> </td></tr>
						<tr><td>Proffesor: </td> <td><input type="text" name="prof"> </td></tr>

						
					</table>
				</div>	
				<input id="file" type="file" name="ff" >
				<br><br>
				<input type="submit" name="">
			
		</form>
		</div>

	

</body>
</html>