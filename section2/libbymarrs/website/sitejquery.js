console.log("hello from external script.js"); //just to check that your script is loading in console
 	

$(document).ready(function(){
	
	$('.star').click(function(){
		// $('.star div').each(function(){
		// 	$(this).toggleClass('flash');
		// });

		$(this).css("background-image","url(https://media.giphy.com/media/SyDYrQYuQHBlK/giphy.gif)");
	});



	// $('.child').click(function(){
	// 	$('.child').toggleClass('flash');
	// });


});
