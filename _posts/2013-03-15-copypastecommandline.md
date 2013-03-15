---
layout: article
title: "Copy and Paste from command line"
date: 2013-03-15 11:00:00
tags: [ 'commandline', 'unix', 'linux' ]
---
Use **"pbcopy"** to copy content of file to your clipboard.

For example:

    $ pbcopy < file.txt

the command will copy all content from "file.txt" directly on your clipboard.

You can check if the content is there by using the **"pbpaste"** command:

    $ pbpaste

The content of "file.txt" will appear on your terminal window.
