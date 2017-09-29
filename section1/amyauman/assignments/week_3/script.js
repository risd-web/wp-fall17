
$(document).ready(function(){

		console.log("check for animation click");

	$('.button').click(function(){
		$('.smalltriangle').toggle(
			function(){
				$(this).removeClass('reverse');
			    $(this).addClass('animate')
			},
			function(){
				$(this).removeClass('animate')
			    $(this).addClass('reverse');
			});
	});



	$('.circle').hover(function(){

		$('.circle').toggleClass("animate2");

	});

	});



