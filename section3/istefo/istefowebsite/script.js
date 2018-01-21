$(document).ready(function(){
 var copy = '<div class="header"> <h1> IRVI STEFO </h1> </div> <div class="description"> <a href="irvi stefo portfolio.html">home</a> <br> <a href="graphic design.html">graphic design</a> <br> <a href="illustration.html">illustration</a> <br> <a href="about.html">about</a> </div>';
 var offset;

	$('.description').click(function(){
		offset = Math.random() * (500 - 1) + 1;
		console.log('click');
		$('body').append('<div class="copy" style="left:' + offset +'px">' + copy + '</div>');
	});

});