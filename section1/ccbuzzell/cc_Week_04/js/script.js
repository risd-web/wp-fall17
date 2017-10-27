$(document).ready(function(){




$("body").click(function(){
        
        $( this ).toggleClass( "black")
        $( ".circle" ).toggleClass( "white")
        $( ".bar" ).toggleClass( "black")
        $( ".bar-top" ).toggleClass( "black")
        $( ".bar-bottom" ).toggleClass( "black")
 
});


$( function() {
    $( ".draggable" ).draggable();
  } );







});