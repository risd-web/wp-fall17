console.log("hello from external script.js"); //just to check that your script is loading in console
 	
	var x = 4;
	console.log(x);
	x = x + 1;
	console.log(x + " after x=x+1");


$(document).ready(function(){

	$("#click").click(function(){
		$("#click").fadeTo("slow",0);
	});

});