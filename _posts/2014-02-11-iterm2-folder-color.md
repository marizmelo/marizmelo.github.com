---
layout: article
title: "Set iTerm2 folder colors"
date: 2014-02-11 01:40:45
tags: [ 'iterm', 'bash', 'colors']
---
I am working on [AWS](http://aws.amazon.com) a lot lately. I had notice that before, but on my [iTerm2](http://www.iterm2.com/) or Terminal on OSX I could not see colors on my [ls](http://en.wikipedia.org/wiki/Ls) command. 

The solution was simple. Just follow these steps:

1. Insert the following command on your ~/.bashrc file (if you don't have this file, just create it on your home directory)

 		alias ls="ls -G"


 2. Reload the bashrc file using the following command

 		$ source ~/.bashrc


 Try to list your files now. You will see that folders are highlighted on a different color.

 That is it.