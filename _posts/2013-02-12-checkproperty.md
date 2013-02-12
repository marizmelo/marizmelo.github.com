---
layout: article
title: "JavaScript - check your properties"
date: 2013-02-12 00:40:45
tags: [ 'JavaScript', 'OOP' ]
---
Sometimes you need to check if an Object has certain property. JavaScript provide two different methods for this.
Let's start by creating a new Object called **Person**.

    var Person = {
      name : "Mariz",
      age : 31
    }

Now let's take a look on that methods which I mentioned before.

**hasOwnProperty**

    console.log( Person.hasOwnProperty ("name") );
    > true

**in**

    console.log( "name" in Person );
    > true

You can also list all properties of your Objects using the method **keys**.

    console.log( Object.keys (Person) );
    > [ "name", "age" ]

That is it, simple and easy.