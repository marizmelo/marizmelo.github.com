/*  MARIZMELO.com JavaScript file */
define(["jquery"], function($){

  // FIRST TIME OPENING PAGE
  $('aside img').load(function(){
    $("#marizlogo").css( { "margin-left" : "80px", "margin-top" : "85px" }).delay(1000).animate( { "margin-left" : "0", "margin-top" : "0" } ); 
  });

  // MOUSE OVER LOGO EFFECT
  $("#marizimage").on("mouseenter", function () {
    $("#marizlogo").stop().animate( { "margin-left" : "80px", "margin-top" : "85px" }, function() {
      $(this).on("mouseleave", function(){ 
        $(this).stop().animate( { "margin-left" : "0", "margin-top" : "0" } ); 
      });
    });
  });

});