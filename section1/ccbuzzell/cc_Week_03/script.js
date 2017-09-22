$(document).ready(function(){


$(".panel").hover(function(){
        $('body').toggleClass('body-change');
    });


$(".fun").click(function(){
        $(".box").toggle();
    });

$(".dope").click(function(){
        $(".panel").toggleClass("circle");
        $(".overlay").toggleClass("circle");
        $('body').toggleClass('body-change');
    });


$(".circle").hover(function(){
        $(".fun").toggle();

    });


$("section").click(function(){
        $(this).toggleClass('section-change');
    });


$(".box").hover(function(){
        $(".dope").toggleClass("fun");
    });


$("body").click(function(){
        $("section").each( function(index, element){
	var random = 10*Math.random();
    $(this).css("height",random+"em");
    $(this).css("width",random+"em");
});
    });



});