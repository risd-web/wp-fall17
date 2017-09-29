console.log("script.js");
 	
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

	});

function reveal(function) {
    var x = document.getElementById('button');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

});
