$(document).ready(function(){

	$(".button").click(function(){
		console.log("check for button click");
		$("h1").toggleClass("reveal");
	});

	$(".button2").click(function(){
		console.log("check for button click");
		$("h1").toggleClass("reveal");
	});

	$(".button3").click(function(){
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

