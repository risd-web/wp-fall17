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






});