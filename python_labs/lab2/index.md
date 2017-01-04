---
layout: labs
title: Lab 2
description: "Geometry Calculator: Variables, Operators, and Conditionals"
---

Please read the following posts that will help get you ready for this lab. You can also refer to them for reference later.

<ul>
  <li><a href="variables.html" target="_blank">Python Variables</a></li>
  <li><a href="operators.html" target="_blank">Python Operators</a></li>
  <li><a href="conditionals.html" target="_blank">Python Conditionals</a></li>
</ul>

## Prequel

I'm going to pretend you actually read those posts now.

Real quick, lets go over how to get input from the user through the command line. This will let you type things in and assign those
values to variables. The only problem is all values that come in are of the `string` type, so you can't do math with them. In the simple 
program below we'll take some input from the user and show you how to change between types. We'll also do some more `if/elif/else` statements
to do some more practice. Definitely type this one out yourself too to see how `raw_input()` works.

{% highlight python linenos %}

my_name = "PJ"
my_age = 23
my_bank_account = 0.02

# ask the user for their name
print "What is your name?"

# this line waits for the user to type something in and hit enter
# whatever they type in is stored in the variable 'name'
name = raw_input()

# ask the user for their age
print "What is your age?"

# again, get the age from the user
age = raw_input()

# now the variable age contains a string that should represent the number
# of the user's age. We convert it to an integer like this
age = int(age)

# get the amount of money in the user's bank account from them
print "How much money do you have in the bank?"
bank_account = raw_input()

# since we're expecting the value of 'bank_account' to contain decimal points
# we'll convert it to a float rather than an int
bank_account = float(bank_account)

# now that we've got all the input we need from the user, lets do something with it!
# lets compare the user to ourselves

print "\n\n"

if my_age > age:
  print "I'm older than you."
elif my_age < age:
  print "I'm younger than you."
else:
  print "We're the same age"

if my_bank_account >= bank_account:
  print "I'm so sorry."
else:
  print "Good for you!"

# the funtion len() gives you the length of whatever you put inside those parenthesis
# with strings, it just counts the number of characters in the string
if len(my_name) > len(name):
  print "My name is longer than yours!"
elif len(name) > len(my_name):
  print "Your name is longer than mine!"
else:
  print "Our names are the same length"

# now that we've compared the user to ourselves, lets reveal the values of all the 'my_' variables
print "\n\nHere's all you need to know about me:"

print "My name is " + my_name

# since 'my_age' and 'my_bank_account' are an int and a float, we must convert them to strings
# before concatenating them. Try leaving the str() part out and see what happens. I dare you.
print "My age is " + str(my_age)
print "I have $" + str(my_bank_account) + " in my bank account"

{% endhighlight %}

**NOTE** If you're wondering what's up with all these parenthesis, they are all used to call `functions`. Functions are little pieces
of code that take some input and give you back some output. So far we've seen `raw_input()`, `int(x)`, `float(x)`, `str(x)`, and `len(x)`,
where x is some variable. We'll use these a LOT more later, but for now just understand how to use them.

**NOTE** if you put a string into `int()` or `float()`
that is not a number, it will break your program.


## The Lab

I want you to create a calculator that can give me the area and perimiter of rectangles, triangles, circles, and trapezoids. First you'll 
ask the user which shape they want you to calculate, presenting them with each of the four options. You'll let them type in which one they 
want using `raw_input()` to wait for their response. If they type in something that is not any of these four shapes, tell them their input
was bad and do nothing else. Once they've selected a shape, ask if they want to know the area or perimeter (area or circumference if they 
selected circle). Again, if they enter invalid input tell them and do nothing else. Once you know which shape they want to know about and 
the number they want you to calculate, ask them for all required inputs that you need to do the math. For example, if they want to know the
area of a rectangle you'd have to ask them for the length of the long side, and the length of the short side. This would be all you would need
to give them the answer. Say they typed in 3 for one side and 2 for the other. You would then compute the answer 6, and print out 
"Area of Rectangle: 6". Look on the internet for the formulas for area and perimeter for each of these shapes if you don't know them. Be sure to
have a variable called `PI` equal to `3.14` declared at the top of your program. Also, you can assume that all numbers entered by the user will
be integers.

This is going to be really challenging if you've never programmed before. You're going to have a lot of `if` statements inside eachother. Make
sure to indent everything properly. Your code won't run if it's not. And as soon as you have a little piece of the code working, **TEST IT**. 
This will save you a lot of time. But don't expect this lab to be as easy as the last one. Take your time, think about all the examples I've 
given you, and really try to understand what everything is doing. Use the internet and you'll be fine. Here's how it should look.

<div class="col-xs-12">
  <img src="/img/lab2/rectangle_area.jpeg" title="Rectangle area" alt="Rectangle area demo" class="col-md-6 col-sm-12 col-xs-12 margin-bottom-15" >
  <img src="/img/lab2/rectangle_perim.jpeg" title="Rectangle perimeter" alt="Rectangle perimeter demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/triangle_area.jpeg" title="Triangle area" alt="Triangle area demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
  <img src="/img/lab2/triangle_perim.jpeg" title="Triangle perimeter" alt="Triangle perimeter demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/circle_area.jpeg" title="Circle area" alt="Circle area demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
  <img src="/img/lab2/circle_circum.jpeg" title="Circle circumference" alt="Circle circumference demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/trapezoid_area.jpeg" title="Trapezoid area" alt="Trapezoid area demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
  <img src="/img/lab2/trapezoid_perim.jpeg" title="Trapezoid perimeter" alt="Trapezoid perimeter demo" class="col-md-6 col-sm-12 col-xs-12  margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/invalid.jpeg" title="Invalid input" alt="Invalid input demo" class="col-md-4 col-md-offset-4 col-sm-8 col-xs-8 col-sm-offset-2 col-xs-offset-2 margin-bottom-15" >
</div>

<h1 class="text-center">Good Luck!</h1>