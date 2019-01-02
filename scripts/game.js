var rightPressed = false;
		var leftPressed = false;
		var topPressed = false;
		var downPressed = false;




window.onload = function(){
	var canvas = document.getElementById("Game");

	var img = document.createElement("img");
	img.src = "images/emoji.png";

	document.addEventListener('keydown',keypressed);
	document.addEventListener('keyup',keyreleased);

		var ctx = canvas.getContext("2d");
		var x = canvas.width/2;
		var y = canvas.height-30;

		var xt = canvas.width/2;
		var yt = canvas.height-100;

		var radius = 10;

		var dspeed = 2;
		var tspeedx = 2;
		var tspeedy = -2;
		var score = 100;
		var scoreSpan = document.getElementById("score");

		GetBestScore();

		function drawEmoji(){
			ctx.drawImage(img,x,y,radius*2,radius*2);
		}

		function drawTarget(){
			ctx.beginPath();
			ctx.strokeStyle = "white";
			ctx.lineWidth = 4;
			ctx.arc(xt, yt, 15, 0, Math.PI*2);
			ctx.stroke();
			ctx.closePath();
		}

		function drawText(text){
			ctx.font = "30px Verdana";
				var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
				gradient.addColorStop("0"," magenta");
				gradient.addColorStop("0.5", "blue");
				gradient.addColorStop("1.0", "red");
				ctx.fillStyle = gradient;
				ctx.fillText(text, canvas.width/2, canvas.height/2);
				clearInterval(ID);
				setTimeout(function(){
					location.reload();
				},2000);
		}

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
    		drawEmoji();
    		drawTarget();

    		if(xt + tspeedx > canvas.width || xt + tspeedx < 20) {
			    tspeedx = -tspeedx;
			}
			if(yt + tspeedy > canvas.height-20 || yt + tspeedy < 20) {
			    tspeedy = -tspeedy;
			}

			xt += tspeedx;
			yt += tspeedy;

			if(rightPressed && x < canvas.width-2*radius){
				x += dspeed;
			}
			if(leftPressed && x > 0){
				x -= dspeed;
			}
			if(topPressed && y > 0){
				y -= dspeed;
			}
			if(downPressed && y < canvas.height-2*radius){
				y += dspeed;
			}

			if((x+2*radius) <= (xt+15) && x >=  (xt-15) && (y+2*radius) <= (yt+15) && y >= (yt-15)){
				drawText("FITORE!");
				DrawMan(0,Math.PI,60);
				UpdateBestScore(score);
			}
			radius+=0.003;
			if(radius > 15){
				drawText("HUMBJE!");
			}
			Score();
		}

		var ID;
		img.onload = function(){
			ID = setInterval(draw, 10);
		}

		function RelodeGame(){
			location.reload();			
		}

		function UpdateBestScore(currentScore){
			var a;
			if(isNaN(sessionStorage.score)){
				a = 0;
			}else {
				a = sessionStorage.score;
			}
			if(currentScore > a){
				sessionStorage.score = currentScore;
			}
		}

		function GetBestScore(){
			if(sessionStorage.score != null){
				$("#BestScore").html("<i>"+Math.round(sessionStorage.score)+"</i>");
			}else {
				$("#BestScore").html("<i>0</i>");
			}
		}


		function Score(){
			score = 100 - (radius-10)/5*100;
			scoreSpan.textContent=Math.round(score);
		}

		DrawMan(Math.PI,Math.PI*2,70);
		function DrawMan(a,b,c){

			var canvas1 = document.getElementById("canvas1");
			
			context = canvas1.getContext("2d"); 
			context.clearRect(0, 0, canvas1.width, canvas1.height);
			context.beginPath();
			context.fillStyle = "#ffe4c4"; // #ffe4c4
			context.arc(200, 50, 30, 0, Math.PI * 2, true); 
			
			context.fill();

			context.beginPath();
			context.strokeStyle = "red"; 
			context.lineWidth = 3;
			context.arc(200, c, 10, a, b, false); 
			context.stroke();

			// syt
			context.beginPath();
			context.fillStyle = "green";
			context.arc(190, 45, 3, 0, Math.PI * 2, true); 
			context.fill();
			context.arc(210, 45, 3, 0, Math.PI * 2, true); 
			context.fill();

			// trupi
			context.beginPath();
			context.moveTo(200, 80);
			context.lineTo(200, 180);
			context.strokeStyle = "navy";
			context.stroke();

			// durt
			context.beginPath();
			context.strokeStyle = "#0000ff";
			context.moveTo(200, 80);
			context.lineTo(150, 130);
			context.moveTo(200, 80);
			context.lineTo(250, 130);
			context.stroke();

			// kembet
			context.beginPath();
			context.strokeStyle = "orange";
			context.moveTo(200, 180);
			context.lineTo(150, 280);
			context.moveTo(200, 180);
			context.lineTo(250, 280);
			context.stroke();
		}
}


function keypressed(event){
	switch(event.keyCode){
		case 38: topPressed = true;break;
		case 40: downPressed = true; break;
		case 37: leftPressed = true;break;
		case 39: rightPressed = true; break;
	}
}

function keyreleased(event){
	switch(event.keyCode){
		case 38: topPressed = false;break;
		case 40: downPressed = false; break;
		case 37: leftPressed = false;break;
		case 39: rightPressed = false; break;
	}
}