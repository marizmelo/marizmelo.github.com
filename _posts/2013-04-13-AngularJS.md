---
layout: article
title: "AngularJS an introduction"
date: 2013-04-13 01:40:45
tags: [ 'AngularJS', 'JavaScript' ]
---
Hi again everyone today I will talk about **Google's** client-side framework [AngularJS](http://angularjs.org/). I have been using AngularJS in my projects for a while now and just decided to share some information here.

AngularJS helps you to control the [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) and create amazing client-side applications. You don't need anything else to start using Angular, just download it (or use a [CDN](http://en.wikipedia.org/wiki/Content_delivery_network)) to get started. Let's start with AngularJS.

Create a file called **angular.html** with the following content:
  
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello AngularJS</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      <h2>Getting started</h2>
    </body>
    </html>


Include AngularJS JavaScript file on the **header** of your **angular.html** file like this:

    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello AngularJS</title>
      <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
    ...

You need to inform AngularJS which elements of the DOM you want to manage. You do this by including the attribute **ng-app** to one of the DOM elements. In our case since I we want to manage the entire DOM tree (more about DOM in another post).

    <!DOCYTYPE html>
    <html ng-app>
      ...

You are ready to use AngularJS. Let's start by using **templates** first:

    ...
    <body>
      <h1>{ { hello } } World!</h1>
    ...

I have replaced the word **Hello** with an **AngularJS template** syntax (between double curly-braces).

Let's replace that template value with the string **"Hello"** again, but this time using AngularJS.

    ...
      <h1 ng-controller="Hello">{ { hello } } World!</h1>
      <h2>Getting started</h2>
    <!-- SCRIPTS -->
    <script>
      function Hello($scope) {
        $scope.hello = "Hello";
      }
    </script>
    ...

Notice the newly created attribute **ng-controller** on our <code>H1</code> element. This attribute is responsible for **controlling** everything between the <code>h1</code> tag element. Another new element is <code>$scope</code>. With this variable you can access all template values in a given scope.

In our <code>script</code> tag we included a <code>function</code> that replace the value of your template **{ {hello} }**.

You should see the replaced value on your browser now.

The complete script:

    <!DOCYTPE html>
    <html ng-app>
    <head>
      <title>Hello AngularJS</title>
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js"></script>
    </head>
    <body>
      <h1 ng-controller="Hello">{ { hello } } World!</h1>
      <h2>Getting started</h2>
      <!-- SCRIPTS -->
      <script>
        function Hello($scope) {
          $scope.hello = "Hello";
        }
      </script>
    </body>
    </html>

This was a quick introduction to AngularJS, more is coming. AngularJS is a powerful framework suitable for small and large applications.
