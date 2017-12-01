$(document).ready(function(){


	$(".click").click(function(){
		console.log("check for button click");
		$("h1").toggleClass('reveal');
	});


	$(".box").click(function(){
		console.log("clicking box");
		$(this).toggleClass('play');
	});


	$(".click2").click(function(){
		console.log("check for button click");
		$("img").toggleClass('reveal');
	});


	$(".box2").click(function(){
		console.log("clicking box");
		$(this).toggleClass('play');
	});

$(".click3").click(function(){
		console.log("check for button click");
		$("h3").toggleClass('reveal');
	});


	$(".box3").click(function(){
		console.log("clicking box");
		$(this).toggleClass('play');
	});




});

