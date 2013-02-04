---
layout: article
title: "JavaScript OOP - Objects attributes and values"
date: 2013-02-04 01:40:45
tags: [ 'JavaScript', 'OOP' ]
---
Let's create an Object called **Person** in JavaScript.


    // Object Literals way
    var Person = { name : "Anonymous", age : null };

    // Functions way
    function Person() {
      this.name = "Anonymous";
      this.age = null;
    }


<alert class="margin-bottom"><i class="icon-attention"> </i> Both ways are correct and valid</alert>

Let's create one **instance** of our object Person. In this case I will create an instance called **Mariz** (my name).


    // Object Literals way
    var Mariz = Person;

    // Functions way

    var Mariz = new Person();


Adding values to our new object instance:


    // Object Literals and Functions
    Mariz.name = "Mariz Melo";
    Mariz.age = 31;


Now here is how you loop over all attributes and return their values:


    for( prop in Mariz ) {
      console.log( prop + " : " + Mariz[ prop ] );
    }

    // Output
    > name : Mariz Melo
    > age : 31


That's a wrap.
