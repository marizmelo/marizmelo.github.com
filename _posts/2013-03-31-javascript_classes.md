---
layout: article
title: "JavaScript Classes"
date: 2013-03-31 01:20:45
tags: [ 'javascript', 'oop' ]
---
Hi everyone, today we are going to talk about **classes** in JavaScript. JS don't implement classes as other languages because its prototypical way.

Declare a class in JavaScript is as easy as create an **Function**. This is how you declare a **function constructor** in JavaScript:

    function Person(name) { 
      this.name = name; 
    }


Define a new method using the function **prototype** (more about prototypes in another post) of our class:

    Person.prototype.getName = function() {
      return this.name;
    };


Let's now create an **instance** of our class **Person**:

    var me = new Person("Mariz"); // create instance of Person


I can use our method **getName()** to return my name:

    me.getName(); // Mariz


Is that simple.