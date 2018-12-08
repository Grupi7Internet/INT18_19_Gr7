var night = false;
var colorChanger;


function changeColors(){
	var body = document.getElementsByTagName("body")[0];
	var quote = document.getElementById("quote");
	//alert(night);
	if(!night){
		colorChanger.src="images/moon.png";
		body.style.backgroundColor ="#3a3a3a";
		quote.style.color = "white";
		night = true;
	}else{
		colorChanger.src="images/sun.png";
		body.style.backgroundColor ="white";
		quote.style.color = "black";
		night = false;
	}
	var Top = document.getElementById("top");
	var logoContainer = document.getElementById("logoContainer");
	var article = document.getElementsByTagName("article");
	var Logo = document.getElementsByClassName("time4shcool")[0];
	toggleClass(logoContainer);
	toggleClass(Top);
	toggleClass(Logo);

	for(var i = 0; i < article.length; i++){
		toggleClass(article[i]);
		var articleParagraphs = article[i].getElementsByTagName("p");
		var articleH3 = article[i].getElementsByTagName("h3");
		for(var j = 0; j < article[i].length; j++){
			toggleClass(articleParagraphs[j]);
			toggleClass(articleH3[j]);
		}
	}
}


function toggleClass(element){
	if(element.classList.contains("night")){
		element.classList.remove('night');
	}else {
		element.classList.add("night");	
	}
}