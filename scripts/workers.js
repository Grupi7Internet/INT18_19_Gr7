var seconds = 0;

function CalculateTime(){
	seconds++;
	var date = new Date(null);
	date.setSeconds(seconds); 
	var result = date.toISOString().substr(11, 8);
	postMessage(result);
	setTimeout("CalculateTime()",1000); 
}

CalculateTime();