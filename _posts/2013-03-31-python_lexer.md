---
layout: article
title: "Python Lexical Analyzer "
date: 2013-03-31 22:50:45
tags: [ 'python', 'compilers', 'lexer' ]
---
Interrupting our series on JavaScript I will talk about python and lexical analysis. **Lexical analysis** (or lexer) is the process of breaking words into **tokens** (small units). 

Today we are going to create a small lexer in python to analyze a small piece of HTML code. 

First we will need to import the python's lexical library called [ply](http://www.dabeaz.com/ply/). To install ply in *nix systems you can run the following command:

    sudo easy_install ply


Create a file called **lexer.py** and write the following code:

    import ply.lex as lex # import lexer library

    # token types that will be used by system
    tokens = (
      'LANGLE', # <
      'LANGLESLASH', # </
      'RANGLE', # >
      'EQUAL', # = 
      'NUMBER', # 33
      'STRING', # "hello"
      'WORD' # any other words
    )

    t_ignore = ' ' # ignore white-spaces

    # handles errors
    def t_error(token):
      print("Illegal character '%s'" % token.value[0])
      token.lexer.skip(1)

    def t_LANGLESLASH(token):
      r'</' # regular expression
      return token

    def t_LANGLE(token):
      r'<'
      return token

    def t_RANGLE(token):
      r'>'
      return token

    def t_EQUAL(token):
      r'='
      return token

    # match numbers strings and convert them to int
    def t_NUMBER(token):
      r"[0-9]+"
      token.value = int(token.value)
      return token

    # match double quoted string without a " inside
    def t_STRING(token):
      r'"[^"]*"'
      token.value = token.value[1:-1] # substring to strip double quotes
      return token  

    # WORD is any word EXCEPT <> or space
    def t_WORD(token):
      r"[^ <>]+"
      return token

    webpage = '"This" is 33 <b>my</b> webpage!' # string to be analyzed

    htmllexer = lex.lex() # tells lex to use all token def (functions) above
    htmllexer.input(webpage) # which string to break up

    while True:
      tok = htmllexer.token() # return next token available
      if not tok: break
      print tok


This is a complex topic. Write a comment if you have any problems implementing this algorithm.

UPDATE: 
As pointed by Thiago Moura on the comments, this code and comments was written while following the Udacity programing language course at http://udacity.com. Thank you Thiago.