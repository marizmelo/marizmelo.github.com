---
layout: article
title: "JavaScript - painless decimal multiplication"
date: 2013-03-22 03:00:45
tags: [ 'JavaScript', 'Math' ]
---
JavaScript has a problem when multiplying decimals, try yourself:

    0.1 * 0.2
    > 0.020000000000000004 // NodeJS 0.8

The way to correct this is to multiply the decimals before multiple their values, try yourself:

    ( 0.1 * 10 + 0.2 * 10 ) / 10
    > 0.3

You can create a function for this:

    function multdec ( val1, val2 ) {
        return ( val1 * 10 + val2 * 10 ) / 10;
    }

You can extend the Math object:

    Math.multdec = function ( val1, val2 ) {
        return ( val1 * 10 + val2 * 10 ) / 10;
    }

Now you can call this operation in two ways:

    multdec( val1, val2 );  // 0.3
    // or
    Math.multdec ( val1, val2 );  // 0.3
