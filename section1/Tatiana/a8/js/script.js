console.log("hello from external script.js"); //just to check that your script is loading in console
 	
	var x = 4;
	console.log(x);
	x = x + 1;
	console.log(x + " after x=x+1");


$(document).ready(function(){

	// $(".box").click(function(){

	// 	console.log("check for button click");
	// 	$("h1").toggleClass("reveal");
	// });


	$(".box").click(function(){
		
		$(this).toggleClass("playvertical");

	});

	$("#first").click(function(){
		
		$(this).toggleClass("playhorizontal");

	});

	$(".box").click(function(){
		
		$(this).toggleClass("fade");

	});


});

