---
layout: article
title: "Pure JavaScript SlideShow"
date: 2013-03-18 23:40:45
tags: [ 'JavaScript' ]
---
I have decided to go back in time and learn pure JavaScript again. I was becoming too dependent of libraries like jQuery and that is never good. Is a good practice and as a result I came up today with this simple SlideShow made completely in JavaScript. 

Let's look at the commented code:

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

    // variables
    var current = 0 // current slide position
    var element = document.getElementById("jslide"); // cache slideShow div wrapper
    var slides = element.getElementsByTagName("img"); // cache location for slide images
    var size = slides.length; // count number of slides
    var start = setInterval(function(){jslide();}, 3000); // loop over slideShow every 3 seconds

    // JSlide slideShow function
    function jslide(){
      if ( current != size - 1 ) { // check if current is the last slide
        slides[ current ].style.display = "none";
      } else { // if is the last slide restart slideShow
        current = 0; // set current to first slide
        for ( var i = 0; i < size; ++i ) {
          slides[i].style.display = "block"; // reset display style
        }
      }
    }// jslide()