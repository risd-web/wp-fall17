$(function() {
	// alert("hello?");
    console.log("check if loaded");

    $('#box').hover(function() {
    	$(this).css('color','red');
        console.log("check that hover is working");
    });

    $('#left').click(function() {
        $('#box').animate({
        	left: "-=40px"
        });
        console.log("check left");
    });

    $('#up').click(function() {
        $('#box').animate({
        	top: "-=40px",
        	opacity: "+=0.1"
        });
    });

    $('#right').click(function() {
        $('#box').animate({
        	left: "+=40px"
        });
    });

    $('#down').click(function() {
        $('#box').animate({
        	top: "+=40px",
        	opacity: "-=0.1px"
        });
    });
});