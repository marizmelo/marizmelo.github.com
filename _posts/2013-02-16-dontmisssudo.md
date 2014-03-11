---
layout: article
title: "Are you missing \"sudo\" on commands in terminal? Don't worry."
date: 2013-02-16 01:40:45
tags: [ 'UNIX', 'Linux', 'Terminal' ]
---
Sometimes you are in your terminal and need to type a command that requires you to have root powers. Well I don't know you, but I sometimes forget to put sudo in front of those commands. Look at this example:

    $ rm somefile
    rm: somenewfile: Permission denied

I have some options here. I could retype the entire command or use arrow up and go to the beginning of the line adding "sudo" to it. But a better way to fix my mistake is using the operator "!!". Like this:

    $ rm somefile
    rm: somenewfile: Permission denied
    $ sudo !!
    $ sudo rm newfile 

Amazing, your file "newfile" is now removed.
Enjoy.
