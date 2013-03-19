---
layout: article
title: "Pure JavaScript SlideShow"
date: 2013-03-18 23:40:45
tags: [ 'JavaScript' ]
---
I have decided to go back in time and learn pure JavaScript again. I was becoming too dependent of libraries like jQuery and that is never good. Is a good practice and as a result I came up today with this simple SlideShow made completely in JavaScript. 

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

    // current slide position  
    var current = 0; 

    // cache slideShow div wrapper
    var element = document.getElementById("jslide");

    // cache location for slide images
    var slides = element.getElementsByTagName("img");

    // count number of slides
    var size = slides.length;

    // loop over slideShow every 3 seconds
    var start = setInterval(function(){jslide();}, 3000);


**JSlide slideShow function**

    function jslide(){

      if ( current != size - 1 ) { 
        
        // check if current is the last slide
        slides[ current ].style.display = "none";

      } else { 

        // if is the last slide restart slideShow
        current = 0; // set current to first slide

        for ( var i = 0; i < size; ++i ) {

          // reset display style
          slides[i].style.display = "block"; 

        }
      }
    }// jslide()    
