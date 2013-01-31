---
layout: article
title: "JavaScript Basics - Primitive Types"
date: 2013-01-31 2:00:00
tags: [ 'JavaScript' ]
---
Let's talk about JavaScript. Lately I've been working in a project for [xchema](http://xchema.com) that involves the use of JavaScript as primary language. So this will be a good exercise for me.


#####Variables
Basic structure to save values (in determined address memory).

    var name = "Mariz Melo";


#####Strings
There is no difference between using single or double quotes when writing strings.

    "hello world"
    'hello world'
    "Let's learn \"JavaScript\"" 
    // You need to scape (\) the quote-type that holds your string


####Numbers
JavaScript hava only one type for numbers. Just type the number you want and JavaScript will understand its type (integer, decimal, etc).

    var val1 = 10;
    var val2 = 0.1;

There is a notable bug while multiplying decimals in JavaScript. You need to multiply the decimals before multiply their values.

    0.1 * 0.2
    > 0.020000000000000004 // wrong

    ( 0.1 * 10 + 0.2 * 10 ) / 10
    > 0.3 // correct


#####Null vs Undefined
Another major point of confusion on JavaScript. A **undefined** variable it means that the variable was declared but do not contain any value. A variable is **null** when the variable it was declared and had its value set to null.

    var myvar;
    > undefined
    typeof myvar
    > undefined
    myvar = null
    typeof myvar
    > object
    myvar == null
    > true  
    myvar == undefined
    > true // what just happen here?
    myvar === null // test value + type equality
    > true 
    myvar === undefined 
    > false // now seems right
    

<alert class="info margin-bottom"><i class="icon-info"> </i> Prefer === over == for strict comparisons.</alert>
<alert><i class="icon-attention"> </i> You may get an Exception if you don't declare the variable before using it.</alert>


    