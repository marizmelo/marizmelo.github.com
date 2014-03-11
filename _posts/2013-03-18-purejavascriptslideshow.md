---
layout: article
title: "Pure JavaScript SlideShow"
date: 2013-03-18 23:40:45
tags: [ 'JavaScript' ]
---
I have decided to go back in time and learn pure JavaScript again. I was becoming too dependent of libraries like jQuery and that is never good. It is a good exercise and as a result I came up today with this simple SlideShow made completely in JavaScript. 

Final result:

**index.html**

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pure JavaScript SlideShow</title>
        <!-- STYLES -->
        <style>
          .jslide { width: 350px; height: 350px; overflow: hidden; }
        </style>
      </head>
      <body>

        <div id="jslide">
          <img src="http://placehold.it/350&text=01">
          <img src="http://placehold.it/350&text=02">
          <img src="http://placehold.it/350&text=03">
          <img src="http://placehold.it/350&text=04">
          <img src="http://placehold.it/350&text=05">
        </div>

        <!-- SCRIPTS -->
        <script src="JSlide.js"></script>
      </body>
    </html>


**jslide.js**

    var current = 0;
    var element = document.getElementById("jslide");
    var slides = element.getElementsByTagName("img");
    var size = slides.length;
    var start = setInterval(function(){jslide();}, 3000);

    function jslide(){
      if ( current != size - 1 ) { 
        slides[ current ].style.display = "none";
      } else {
        current = 0;
        for ( var i = 0; i < size; ++i ) {
          slides[i].style.display = "block"; 
        }
      }
    }


Now let's take a look over the commented source code:

**Variables**

    // CURRENT SLIDE POSITION
    var current = 0; 

    // CACHE SLIDESHOW DIV WRAPPER
    var element = document.getElementById("jslide");

    // CACHE SLIDESHOW IMAGES
    var slides = element.getElementsByTagName("img");

    // COUNT NUMBER OF SLIDES
    var size = slides.length;

    // LOOP OVER SLIDESHOW EVERY 3 SECONDS
    var start = setInterval(function(){jslide();}, 3000);


**JSlide slideShow function**

    function jslide(){

      if ( current != size - 1 ) { 
        
        // CHECK IF CURRENT SLIDE IS THE LAST SLIDE
        slides[ current ].style.display = "none";

      } else { 

        // IF IS THE LAST SLIDE RESTART SLIDESHOW

        current = 0; // RESET "CURRENT" VARIABLE

        for ( var i = 0; i < size; ++i ) {

          // RESET DISPLAY STYLE
          slides[i].style.display = "block"; 

        }
      }
    }// jslide()    
