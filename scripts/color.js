var night = false;
var colorChanger;




function toggleClass(element){
	if(element.classList.contains("night")){
		element.classList.remove('night');
	}else {
		element.classList.add("night");	
	}
}