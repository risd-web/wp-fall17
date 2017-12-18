$(document).ready(function(){


	$(".button").click(function(){
		console.log("check for button click");
		$("h1").toggleClass('reveal');
	});


	$(".element").click(function(){
		console.log("clicking element");
		$(this).toggleClass('play');
	});

	$(".element").hover(function(){
		console.log("hoverovercaption");
		$(this).toggleClass('reveal');
	}

});

