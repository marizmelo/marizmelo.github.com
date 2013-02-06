---
layout: article
title: "JavaScript Functions - Names"
date: 2013-02-06 00:40:00
tags: [ 'JavaScript', 'OOP', 'Functions' ]
---
Function names in JavaScript can be trick. Consider the following function:

    function name(){
        alert("Mariz Melo");
    }

There is nothing wrong with this function, in fact is a perfectly fine function in JavaScript. The problem is JavaScript has some rules for function names. You are not allowed to start the name with numbers or special characters (other than underscore and dollar sign).

    function $() {
        alert("dollar sign");
    }

    function _() {
        alert ("underscore");
    }

Recently I tried to attach some CSS classes as function names in JavaScript and got an error because some of my class names are using "-" to separate names. See an example:

    // invalid
    function display-none(){
        alert("display none don't work");
    }

Of course I could use something like **replace** and convert "-" into "_", but I wanted to keep consistency across the system, so I come up with the following solution:

    // valid
    var css = {
        "display-none" : function(){
            alert("display none");
        }
    }

I just used an Object as wrapper to all my functions, and doing so I kept all functions more organized.

Calling my function **display-none**:

    css["display-none"](); // valid call


Happy hacking!