/*  MARIZMELO.com JavaScript file */
define(["jquery"], function($){
  console.log("marizmelo.js loaded");

  $("#marizimage").on("mouseenter", function () {
    $("#marizlogo").stop().animate( { "margin-left" : "80px", "margin-top" : "100px" }, function() {
      $(this).on("mouseleave", function(){ 
        $(this).stop().animate( { "margin-left" : "0", "margin-top" : "0" } ); 
      });
    });
  });

});