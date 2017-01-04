---
layout: labs
title: Intro to Conditional Statements
description: If, Elif, and Else
---

What if we want to do different things in our code depending on the value of a variable? We use `if` statements
of course! Here we will show you how to run specific parts of your Python code depending whichever conditions you set. "Conditionals", get it?

Here's how it works. You start out with the keyword `if` followed by a boolean statement (something that evaluates to `True` or `False`) 
then a colon (`:`). You then start a new line, and make sure to indent **ONCE**. In Python this indentation is very important, and must stay 
consistent throughout your program. Most editors will insert 4 spaces when you press the tab key rather than a tab character, and that is
probably the safest way (in my opinion) to do it. Underneath the `if` keyword you put any code you want to run if the conditions are 
true. If there is another condition or set of conditions you also want to check, you can use the `elif` (else if) keyword to check a 
more conditions if the statements before it are all false. If all `if` and `elif` statements evaluate to false, an `else` keyword can 
be used to do something else. Hopefully this will make sense given the following example. Pretend we have one integer variable called 
`your_age` set in the program below.

{% highlight python linenos %}

# here's an example of if, elif, and else all together
# we're assuming your_age >= 0
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
sense of it. Don't forget to give a value to `your_age` at the top of your program! 


If you have `if` statements nested inside other `if` statements, you have to indent one more time than the previous `if` statement was. Hopefully
the next example will show you what that means.

{% highlight python linenos %}

if your_age >= 0:
    # indented once
    if your_age == 0:
        # indented twice
        print "Congrats on being born!"
    elif your_age > 12:
        if your_age >= 20:
            # indented thrice
            print "You are an adult."
        else:
            print "You are a teenager."
    else:
        # indented twice again
        print "You're not a teenager yet."
else:
    # indented once again
    print "HOW DID YOU GET A NEGATIVE AGE? I WANT ONE."

{% endhighlight %}


You can also have some more complex conditions for your `if` statements by combining statements with the `and`, `or`, or `not` operators.
This can quickly get confusing though, so try to keep your conditions simple and concise. It's pretty common to have two or three conditions
linked together in one `if` but too many more than that and you won't even remember what it's supposed to mean. You can also use parenthesis to
make sure groups of statements get evaluated together, much like how parentheses work in math. 
[PEMDAS](https://en.wikipedia.org/wiki/Order_of_operations) remember?

Lets say we want a statement that will decide whether or not a person is tall. We can't just check their height because how "tall" a person
is also depends on their gender. A 5'10" woman in America would be considered tall, while a man of that height would be about average. Lets 
do this the hard way first, then we'll condense it so you can see how to form complex conditions. We're going to have a boolean variable called
`male` and an integer variable called `height` that is measured in inches.

{% highlight python linenos %}

if male:
    if height > 72:
        print "You are tall"
    else:
        print "You are not tall"
else:
    if height > 68:
        print "You are tall"
    else:
        print "You are not tall"

{% endhighlight %}

See how we basically had to write out the same `print` statements twice? Lets see how we could simplify this code.

{% highlight python linenos %}

if (male and height > 72) or (not male and height > 68):
    print "You are tall"
else:
    print "You are not tall"

{% endhighlight %}

We went from 10 lines of code down to 4, and we didn't have to repeat ourselves! Do you see why we put the parentheses where we did though?
What would the condition  `male and (height > 72 or not male) and height > 68` mean? Rather than saying, if you're a male taller than 72" or
a female taller than 68", this new statement checks to see if you're male, if you're taller than 72" or female, AND if you're taller than 68".
If you are a female this statement would NEVER be true, even if you're 108". So be careful with your parentheses!

Conditional statements are really powerful, and are what really allow you to get anything done in programming. If you've programmed in another
language before you'll probably be weirded out that there are no parentheses around the conditions and no curly braces enclosing the `if` 
statement. I think it's weird too. But it's also freeing and a little more clear in my opinion. Python has very strong opinions about how
the syntax should look, so get used to it!

**NOTE** about "truth". Notice how in that last example I just said `if male:`? I could do that because I said `male` is a boolean variable,
which means it's already equal to either `True` or `False`. I could have also said `if male == True`, but that would have been redundant. But
what would happen if `male` wasn't a boolean variable? What if it was a string? Or a number? Or a list? Numbers almost always evaluate to `True`, 
except for when it's `0`. Doesn't matter if it's a float `0.0` or an int `0`, it will be `False`. Strings, lists, dictionaries, sets, and tuples 
are all `True` if they are not empty; that is if the `len` of that item is greater than zero, it will be `True`, otherwise it's `False`. Also, 
if your variable is `None` (meaning it has no value), it will be `False`. Not knowing what type your variable is could cause some weird things 
to happen with your `if` statements, so keep this in mind as you code!
