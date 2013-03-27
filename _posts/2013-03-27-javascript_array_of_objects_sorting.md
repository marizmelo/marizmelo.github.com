---
layout: article
title: "JavaScript - Easily Sorting an Array of Objects"
date: 2013-03-27 11:40:45
tags: [ 'javascript', 'oop', 'arrays' ]
---
Hi everyone, today we are going to take a look on a sleek technique to sort an **Array of Objects**. 

The **sort()** method of JavaScript provide an easy way for us to sort Arrays. Take a look:

Numbers:
  
    [3, 1, 4, 2].sort(); // [1, 2, 3, 4]


Characters:

    ["a", "d", "c", "b"].sort(); // ["a", "b", "c", "d"]


Strings:

    ["Jose", "Antonio", "Ana", "Michael"].sort(); // ["Ana", "Antonio", "Jose", "Michael"]


Simple right? What about when you have an Array of Objects?

You can still use the **sort()** method to sort your Array, you just need to inform which property in the object you want to sort.

Let's imagine a contact book for example. You will receive an unordered array of object that you want to sort:

Array of objects
    
    [{name:"Mariz", age: 32}, {name: "Samira", age: 25}, {name: "Leticia", age: 9}]


If you try to sort this array nothing will happen:


    [{name:"Mariz", age: 32}, {name: "Samira", age: 25}, {name: "Leticia", age: 9}].sort();


Now lets use a function expression (or callback function) to sort this array of objects:

**compareName** callback function:

    function compareName(contact1, contact2) {
      if (contact1.name < contact2.name) {
        return 0;
      } else {
        return 1;
      }
    }


Calling sort method with callback function **compareName** that we wrote on the last step:

    [{name:"Mariz", age: 32}, {name: "Samira", age: 25}, {name: "Leticia", age: 9}].sort(compareName);


Sorting for age

    [{name:"Mariz", age: 32}, {name: "Samira", age: 25}, {name: "Leticia", age: 9}].sort(function(contact1, contact2) { 
        return contact1.age - contact2.age; 
    });


That is it for today!
