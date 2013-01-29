---
layout: article
title: "Boosting your JavaScript loading time with RequireJS"
date: 2013-01-27 22:23:00
---
There are two common ways to load JavaScript on HTML pages. 

1. Scripts on the <code>head</code> tag element
2. Scripts on the bottom of your <code>html</code> page (right before <code>/body</code>)
<br><br>

The first technique has a serious problem, the browser will wait for all scripts to load before showing content to users.

In the second (better) case the page will be presented to your users before loading any script. This is **unobtrusive**, the JavaScript is not in the way between users and content delivery. Do you want anyone waiting for your website to load?

So what is the problem with the second technique? Well, the first problem is that using <code>script</code> tag your scripts will load **sequentially** increasing the total time for users to see your website.

A better approach is to load your scripts in **parallel**, but there is one caveat. Scripts most of the time have dependencies and is complicated to manage them while loading them in parallel. You could come up with your own system to manage dependencies or you could use **Asynchronous Module Definitio (AMD)**. 

Using AMD you can load your scripts in parallel while managing their dependencies. So let's take a look on how to use **RequireJS** a popular AMD solution (see the end of this article for other options). 

First, let's insert RequireJS on the <code>head</code> of our HTML file:

    <script data-main="scripts/main.js" src="scripts/require.js"></script>

You may have noticed the **data-main** attribute on the example above. That defines the location of your configuration file (main.js in this example) and automatically set the **baseUrl**, in this case **scripts/**.

<alert class="info margin-top margin-bottom"><i class="icon-info"> </i> The <strong>baseUrl</strong> can be changed on the configuration file.</alert>

<alert class="warning margin-top margin-bottom"><i class="icon-attention"> </i> Dependencies shouldn't contain the trailing ".js" suffix on the config file.</alert>

<alert class="warning margin-top margin-bottom"><i class="icon-attention"> </i> RequireJS load scripts asynchronously and out of order for speed.</alert>

Assuming all my scripts are inside the <code>scripts</code> folder, let's load some files using RequireJS. The **JQuery** library will be loaded **first** followed by two plugins called **slidejs** and **galleryjs**.

In you <code>main.js</code> write:

    //loading jquery as dependency
    require(["jquery"], function($){
      // JQuery is ready for use
      //calling slidejs plugin
      require(["slidejs", "galleryjs"], function(){
        $("#slideshow").slidejs();
        $("#gallery").galleryjs();
      });
    });

Because RequireJS load scripts out of order we have to make sure JQuery is ready before we load our plugins. The plugins are loaded in **parallel**.

RequireJS is powerful and here I just touch the surface of its real power. Make sure you check the [RequireJS website](http://requirejs.org/) for a complete overview.

Alternatives to RequireJS:

* [LABjs](http://labjs.com/)
* [HEADjs](http://headjs.com/)
