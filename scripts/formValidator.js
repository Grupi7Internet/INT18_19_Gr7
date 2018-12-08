function FormEmail(x){
	var pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
	return pattern.test(x);
}

function ShowInputError(input){
	input.setAttribute("class","inputError");
}

function AreEmpty(inputs,errorsOl){
	var errors = false;
	//console.log(errorsOl);
	for(var i = 0; i < inputs.length; i++){
		if(inputs[i].value == ""){
			ShowInputError(inputs[i]);
			errors = true;
		}
	}
	if(errors == true)
		errorsOl.innerHTML+="<li>Fields can't be empty.</li>";
	return errors;
}

function validePhoneNumber(input,errorsOl){
	if(input.value == "") return false;
	var p = /[\+\s()]?[0-9]$/;
	var valid = p.test(input.value);
	if(!valid){
		ShowInputError(input);
		errorsOl.innerHTML+="<li>Wrong Number Format.</li>";
		return false;
	}else{
		return true;
	}
}

function ValideName(name){
	try{
		if(/\d/.test(name.value)) {
			throw "Name can't contain numbers";
		}
	}
	catch(err){
		$(".error").html(err);
		ShowInputError(name);
		$(".error").show(200);
	}
}

function BirthDayValid(date){

	var inputedData = new Date(date.value);
	var today = new Date();
	try{
		if(inputedData > today) {
			throw "Date not valid"; 
		}else{
			$(date).next().hide(200);
		}
	}
	catch(err){
		$(date).next().html(err);
		ShowInputError(date);
		$(date).next().show(200);
	}
}

function StrongPassword(e){
	var Regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	if(e.value.match(Regex) || e.value == ""){
		$(e).next().hide(200);
		return true;
	}else{
		$(e).next().show(200);
		return false;
	}
}

