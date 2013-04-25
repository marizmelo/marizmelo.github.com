---
layout: article
title: "Reverse strings in JavaScript"
date: 2013-04-25 11:40:45
tags: [ 'JavaScript' ]
---

Today a simple way to reverse string in JavaScript.

		var reversed
			,	name = "Mariz Melo";
		
		reversed = name.slipt("").reverse().join("");		
		alert(reversed);

That is it. What just happened?

Well we used the JavaScript <code>split</code> method to convert our string into an Array of words. After that we used the <code>reversed</code> method to reverse the order of those words in our newly created Array. Finally, we used the method <code>join</code> to convert the Array into a string again (now with the words in reverse order).

That is it. 
		
		