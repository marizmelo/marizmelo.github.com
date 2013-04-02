---
layout: article
title: "Python map method and lambda expressions"
date: 2013-04-02 01:40:45
tags: [ 'python', 'lambda', 'mapReduce' ]
---
I have been studying more **python** these days and decided to share some of my findings. Python has a powerful method called **map** that can apply operations to all items of a list.

Assume the following function definition For example:

    def square(x):
      return x * x

You can apply this function to a list of elements using python's map method like this:

    print map( square, [1, 2, 3, 4, 5]) // [1, 4, 9 , 16, 25]

But let's take this power even further using a **lambda** expression. We could rewrite the expression above like this:

    print map( lambda(x): x * x, [1, 2, 3, 4 , 5]) // [1, 4, 9 , 16, 25]

Now a third way you can use this using an **expressive formula**:

    print [x * x for x in [1, 2, 3, 4 ,5]] // also [1, 4, 9 , 16, 25]

Have fun.