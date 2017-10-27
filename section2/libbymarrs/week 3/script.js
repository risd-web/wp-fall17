console.log("hello from external script.js"); //just to check that your script is loading in console
 	

$(document).ready(function(){
	
	$('.circles').click(function(){
		$('.circle').toggleClass('flash');
	});


});
