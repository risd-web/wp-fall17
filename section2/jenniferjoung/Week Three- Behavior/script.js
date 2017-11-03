console.log("hello from external script.js"); //just to check that your script is loading in console
 	
	var x = 4;
	console.log(x);
	x = x + 1;
	console.log(x + " after x=x+1");


$(document).ready(function(){

	$(".button").click(function(){

		console.log("check for button click");
		$("h1").toggleClass("reveal");
	});


	$(".element").click(function(){
		$(this).toggleClass("play");
		$('h1').text(myText);
	});

	var myText = $('h2').text();

	console.log(myText);


});

