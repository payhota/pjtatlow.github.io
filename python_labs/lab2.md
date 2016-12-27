---
layout: labs
title: Lab 2
description: "Geometry Calculator: Variables, Operators, and Conditionals"
---


## Variables

One of the most fundamental ideas in programming is the ability to store values in variables. This allows you manipulate
numbers, combine strings, and keep track of all your values. As you'll quickly realize, variables are essential in any program. In Python,
we have four basic types of variables: strings, integers, floats, and booleans. Strings are basically just a bunch of characters between 
double or single quotes. Integers are numbers that don't have decimal points, and floats are decimal numbers. Python can handle decimals up
to 13 places. Both integers and floats can be positive or negative. Boolean values are just a fancy way of saying true or false. In Python we 
use the keywords `True` and `False`, making sure the first letter is capitalized. You'll see why we need these when we talk about conditional
statements.

Variables can be named pretty much whatever you want. The only rules are that variables **MUST** begin with either a letter or an underscore,
they can only contain letters, numbers, and underscores, and they are case sensitive (`NAME` is not the same as `name` or `Name`). It is very
important to make sure your variable names make sense, so when you read your code later you know what is supposed to be stored in that variable.
Variables are given values by putting the variable name on the left, an `=` sign in the middle, and it's value on the right, like this: 
`variable = "value"`. The value can be any of the data types mentioned above, another variable, or an expression that gives you a value. 
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

## Operators

Don't be afraid of the term operator, you've been using them since kindergarden. It's just a fancy word for a symbol that does something. 
You've already seen one, the assignment operator `=`! This takes the value on the right and assigns it to the variable on the left.
I'll put a table of some more common operators below for reference, but many of them should be fairly self explanitory. **NOTE** I'm putting 
actual numbers in the examples below, but you can use any of these operators (except for assignment) with variables or numbers/strings on 
either side!

### Arithmetic Operators
This is how we do math.
<table class="table table-hover reference-table">
  <thead>
    <th>Operator</th>
    <th width="60%">Description</th>
    <th width="15%">Example</th>
    <th width="15%">Value</th>
  </thead>
  <tbody>
    <tr>
      <td class="center-cell"><code>+</code></td>
      <td>Addition operator! You should be familiar with how this works. Additionally (pun intended) it also works as the concatonation 
      operator, combining two string together. <strong>DO NOT</strong> try to add numbers and strings together. Or do. Your funeral.</td>
      <td><code>1 + 1</code><br><code>"Hi " + "Dad"</code></td>
      <td><code>2</code><br><code>"Hi Dad"</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>-</code></td>
      <td>Subtraction operator. Again, you should be familiar with this. Subtracts the number on the right from the number on the left.</td>
      <td><code>1 - 1</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>*</code></td>
      <td>Multiplication. Multiplies the two numbers together. Also, "multiplies" a string.</td>
      <td><code>2 * 3</code><br><code>"W"*3</code></td>
      <td><code>6</code><br><code>"WWW"</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>/</code></td>
      <td>Division. Divides the number on the left by the number on the right. If you are dividing two integers it will give you back an integer,
      so if your number doesn't fit entirely you won't see the decimal unless one of them is a float.</td>
      <td><code>6 / 2</code><br><code>3 / 2</code><br><code>3 / 2.0</code></td>
      <td><code>3</code><br><code>1</code><br><code>1.5</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>%</code></td>
      <td>Modulus (sometimes called mod). This one is probably new to you. Basically it gives you the remainder of a division. If you want to know if a number is
      odd or even, use the modulus operator with the number two and if the remainder is 0 then it's even, if the remainder is 1 it's odd!</td>
      <td><code>6 % 2</code><br><code>3 % 2</code><br><code>3 % 2.0</code></td>
      <td><code>0</code><br><code>1</code><br><code>1.0</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>**</code></td>
      <td>Exponents! Takes the number on the left and raises it to the power of the number on the right.</td>
      <td><code>2 ** 3</code><br><code>16 ** 0.5</code></td>
      <td><code>8</code><br><code>4.0</code></td>
    </tr>
  </tbody>
</table>

### Comparison Operators
All of these operators change your comparison statement to the booleans `True` or `False`.
<table class="table table-hover reference-table">
  <thead>
    <th>Operator</th>
    <th width="60%">Description</th>
    <th width="15%">Example</th>
    <th width="15%">Value</th>
  </thead>
  <tbody>
    <tr>
      <td class="center-cell"><code>==</code></td>
      <td>Equality operator. Checks if the two items are equal in value. Works with numbers, strings, and booleans. At first you might
      try to use <code>=</code> to see if two things are equal. This will not create an error, as most of the time this is valid syntax,
      but it will actually just assign a value to your left-side variable instead of checking to see if they're equal!</td>
      <td><code>1 == 1</code><br><code>2 == 1</code><br><code>"pj" == "PJ"</code></td>
      <td><code>True</code><br><code>False</code><br><code>False</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>!=</code></td>
      <td>Inequality operator. Checks if the two items are <strong>NOT</strong> equal in value. Works with numbers, strings, and booleans.</td>
      <td><code>1 != 1</code><br><code>2 != 1</code><br><code>"pj" != "PJ"</code></td>
      <td><code>False</code><br><code>True</code><br><code>True</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>></code></td>
      <td>Greater-Than operator. Is true if the number on the right is greater than the number on the left. With strings,
      this evaluates to true if the string on the left is lexicographically greater than the string on the right. Don't worry
      too much about what that means, but if you need to know you can read it <a href="https://en.wikipedia.org/wiki/Lexicographical_order">
      here</a>.</td>
      <td><code>1 > 1</code><br><code>2 > 1</code><br><code>"pj" > "PJ"</code></td>
      <td><code>False</code><br><code>True</code><br><code>True</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>>=</code></td>
      <td>Greater-Than-Or-Equal-To operator. Is true if the number on the right is greater than or equal to the number on the left. Same 
      rules apply for strings.</td>
      <td><code>1 >= 1</code><br><code>2 >= 1</code><br><code>"pj" >= "PJ"</code></td>
      <td><code>True</code><br><code>True</code><br><code>True</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>&lt;</code></td>
      <td>Less-Than operator. Is true if the number on the right is less than the number on the left. Same 
      rules apply for strings.</td>
      <td><code>1 &lt; 1</code><br><code>2 &lt; 1</code><br><code>"pj" &lt; "PJ"</code></td>
      <td><code>False</code><br><code>False</code><br><code>False</code></td>
    </tr>
    <tr>
      <td class="center-cell"><code>&lt;=</code></td>
      <td>Less-Than-Or-Equal-To operator. Is true if the number on the right is less than or equal to the number on the left. Same 
      rules apply for strings.</td>
      <td><code>1 &lt;= 1</code><br><code>2 &lt;= 1</code><br><code>"pj" &lt;= "PJ"</code></td>
      <td><code>True</code><br><code>False</code><br><code>False</code></td>
    </tr>
  </tbody>
</table>

There are quite a few more operators, but for this lab these should be the only ones you need. For a more complete reference, see 
[this page](https://www.tutorialspoint.com/python/python_basic_operators.htm).


## Conditional Statements

Now for the fun part. What if we want to do different things in our code depending on the value of a variable? We use `if` statements
of course! Here's how it works. You start out with the keyword `if` followed by a comparison statement (using a comparison operator), 
then a colon (`:`). You then start a new line, and make sure to indent **ONCE**. In Python this indentation is very important. Underneath
the `if` keyword you put any code you want to run if the conditional statement is true. If there is another conditional you also want to check,
you can use the `elif` (else if) keyword to check a second conditional if the first one is false. If all `if` and `elif` statements evaluate to 
false, an `else` keyword can be used to do something else. Hopefully this will make sense given the following example. Pretend we have one integer
variable called `your_age` set in the program below.

{% highlight python linenos %}

# here's an example of if, elif, and else all together
if your_age == 0:
  # do something, knowing 'your_age' is 0
  print "Congrats on being born!"
elif your_age < 13:   # if we ever evaluate this line we know that your_age is not 0
  # do something, knowing 'your_age' is not 0, and is less than 13
  print "You are not a teenager yet."
elif your_age >= 20:  # now we know they are 13 or older
  # do something, knowing 'your_age' is not 0, is greater than 12, and is greater than or equal to 20
  print "You are an adult."
else:   # if we get here we know they're older than 12 but less than 18
  # do something, knowing 'your_age' is not 0,  is greater than 12, and is less than to 20
  print "You are a teenager"

{% endhighlight %}

Try this program out if it doesn't make sense to you. But don't copy and paste it in, type it all out for yourself! It'll help you make 
sense of it. Don't forget to give a value to `your_age` at the top of your program! **NOTE** if you put a string into `int()` or `float()`
that is not a number, it will break your program.

## Extra Section!

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

**Note** If you're wondering what's up with all these parenthesis, they are all used to call `functions`. Functions are little pieces
of code that take some input and give you back some output. So far we've seen `raw_input()`, `int(x)`, `float(x)`, `str(x)`, and `len(x)`,
where x is some variable. We'll use these a LOT more later, but for now just understand how to use them.

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
  <img src="/img/lab2/rectangle_area.jpeg" title="Rectangle area" alt="Rectangle area demo" class="col-md-6 col-sm-12 margin-bottom-15" >
  <img src="/img/lab2/rectangle_perim.jpeg" title="Rectangle perimeter" alt="Rectangle perimeter demo" class="col-md-6 col-sm-12 margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/triangle_area.jpeg" title="Triangle area" alt="Triangle area demo" class="col-md-6 col-sm-12 margin-bottom-15" >
  <img src="/img/lab2/triangle_perim.jpeg" title="Triangle perimeter" alt="Triangle perimeter demo" class="col-md-6 col-sm-12 margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/circle_area.jpeg" title="Circle area" alt="Circle area demo" class="col-md-6 col-sm-12 margin-bottom-15" >
  <img src="/img/lab2/circle_circum.jpeg" title="Circle circumference" alt="Circle circumference demo" class="col-md-6 col-sm-12 margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/trapezoid_area.jpeg" title="Trapezoid area" alt="Trapezoid area demo" class="col-md-6 col-sm-12 margin-bottom-15" >
  <img src="/img/lab2/trapezoid_perim.jpeg" title="Trapezoid perimeter" alt="Trapezoid perimeter demo" class="col-md-6 col-sm-12 margin-bottom-15" >
</div>
<div class="col-xs-12">
  <img src="/img/lab2/invalid.jpeg" title="Invalid input" alt="Invalid input demo" class="col-md-4 col-md-offset-4 col-sm-8 margin-bottom-15" >
</div>

<h1 class="text-center">Good Luck!</h1>
