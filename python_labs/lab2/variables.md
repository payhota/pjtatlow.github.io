---
layout: labs
title: Intro to Python Variables
description: Variables and Literals
---

One of the most fundamental ideas in programming is the ability to store values in variables. This allows you manipulate
numbers, combine strings, and keep track of all your values. As you'll quickly realize, variables are essential in any program. In Python,
we have four basic types of variables: strings, integers, floats, and booleans. 

Strings are basically just a bunch of characters between double or single quotes. Integers are numbers that don't have decimal points, 
and floats are decimal numbers. Python can handle decimals up to 13 places, and very large integers. Both integers and floats can be positive or negative. 
Boolean values are just a fancy way of saying true or false. In Python we use the keywords `True` and `False`, making sure the first 
letter is capitalized.

Variables can be named pretty much whatever you want. The only rules are that variables **MUST** begin with either a letter or an underscore,
they can only contain letters, numbers, and underscores, and they are case sensitive (`NAME` is not the same as `name` or `Name`). It is very
important to make sure your variable names make sense, so when you read your code later you know what is supposed to be stored in that variable.
Variables are given values by putting the variable name on the left, an `=` sign in the middle, and it's value on the right, like this: 
`variable = value`. The value can be any of the data types mentioned above, another variable, or an expression that gives you a value. 
Lets see some examples.

{% highlight python linenos %}
# Here we create a variable called my_name and assign it a string value
my_name = "PJ Tatlow"

# Here we create a variable called my_age and assign it an int value
my_age = 23

# Here we create a variable called python_is_awesome and assign it a boolean value
python_is_awesome = True

# we add one to our current age and assign that to a variable
age_next_year = my_age + 1 # value 24

# Here we create a variable called pi and assign it a float value
pi = 3.14

# another variable with an int value
radius = 5

# remember the circumference of a circle is (2 * pi * r)
# the expression (2 * pi * radius) is equivalent to a float, 
# which is then assigned to the variable "circumference"
circumference = 2 * pi * radius # value 31.4

{% endhighlight %}

**NOTE** You can put comments in your code by putting a `#` in front of the words you don't want to actually be run as code.
Check out [this tutorial](http://www.thehelloworldprogram.com/python/python-variable-assignment-statements-rules-conventions-naming/)
if you want to read more about variables.


There's one other term that's worth mentioning while we're on the topic of variables, literals. Literals are kind of the opposite
of variables, their values can only be one thing, whereas a variable can have ANY value. A literal is pretty much any value that isn't
a variable. The number `10` is a number literal. The string `"Hello World!"` is a string literal. The list `[1,2,3,4,5]` is a list 
literal. An easy way to tell if what you're looking at is a literal is if you know it's value just by looking at it. And if you don't,
it's probably a variable!