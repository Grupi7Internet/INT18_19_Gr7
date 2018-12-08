function FormEmail(x){
	var pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
	return pattern.test(x);
}

function ShowInputError(input){
	input.setAttribute("class","inputError");
}
