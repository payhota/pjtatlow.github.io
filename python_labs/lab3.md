---
layout: labs
title: Lab 3
description: "Containers: Lists, Tuples, Dictionaries"

---


## What Are Those?

So far we've talked about a few of the basic data types in Python, but there are three more that you need to know about. I left
them out because they're all kinda special, and super important. You won't be able to imagine life without them after this. They 
help you collect your values into groups that will help you do some really cool things. Lets start looking at what these things actually
are now.

## Lists

Lists are exactly what it sounds like they are, lists. Lists of strings, lists of numbers, lists of booleans, even lists of lists! You can
make lists of any type of data. If you've programmed in another language before, lists are similar to arrays but kind of different at the 
same time. Python doesn't care what types of data are in a individual list, so you can put different types of data into the same list. I find this
to be bad practice, but sometimes I suppose it might be necessary. I like to make sure my lists have only one type of data in them, so 
all strings, all numbers, etc. This way you know exactly what you're going to get when you get an item from the list. Lists are what are known
as a **mutable** data type because they can be modified. Lets see how they work.


#### Creating lists

To create an empty list, you can use either a set of square brackets, `[]` or the function `list()`. I usually just use the square
brackets like this: `my_list = []`. That will basically give you a list of size 0 (because you haven't put anything inside yet!). To 
create a list with some stuff in it, put the "stuff" inside the square brackets (with commas separating each element in the list):
`my_list = ["This","is","a","list"]`. Now `my_list` has four elements inside (size 4), each of them strings. Now we've created a list!

**NOTE** If you want to convert a tuple or other compatable type into a list, you can do so by passing that element into the `list()`
function.

#### Accessing lists

There's another operator I haven't told you about yet. It's called the subscripting operator and it uses the square brackets `[]` too.
We can use this operator to get elements from a specific position in the list by putting the number of the position (called the index) 
we want inside the square brackets like this: `my_list[1]`. By putting the `1` inside the square brackets, we're asking Python to give 
us the element at position 1. You might think at first that with our previous example, `my_list[1]` is going to give us back the string 
`"This"`, since that's the first element in the list we created right? But lists are what we call **zero-based** so the first element in 
the list is actually at index `0`, and `1` is the second element in the list. That might be a little confusing at first, but many programming
languages work this way and it's probably good to get used to it now! You must be careful to not ask the list for an index that does not exist
since your program will crash instantly. For example, if we asked for index `4` of `my_list` (`my_list[4]`) Python would get really mad and tell us that 
our index is `out of range`. But we put four things into the list right? How can `4` be out of range? Well since we started at `0` as the
first index, that means the fourth element is actually at index `3`. In fact, any list of `n` elements will have a maximum index of `n-1` and the
nth-element in a list will be at index `n-1` as well. If this is confusing, that's okay. Move on and you'll get used to it.

We can also use negative indexes as well, to start indexing from the back of the list. `my_list[-1]` would give you the last element of the list,
whereas `my_list[-4]` would give you back `"This"` in our case. Cool right?

#### Slicing Lists

Imaging the list is a sliced up loaf of bread, with each slice of bread being a different element in the list. "Slicing" the list would be 
grabbing a few slices of bread at once, giving you a partial loaf of bread that came from the original loaf. Slicing lets you make a list out
of a section of an existing list. Again we're going to use the the subscripting operator, but this time we're going to use a colon, `:`, to tell
Python that we want a slice. On the left of the colon you put the index where you want your slice to begin, and on the right of the colon you put
the index where you want your slice to stop. The element on the index at the right will **NOT** be included in your slice. For example, 
`my_list[1:3]` will give you back a slice like this: `['is','a']`. See what happened there? Python took all elements between index 1 and 3 and
put them in a new list for us. If you wanted a slice of everything after a particular element, leave off the number on the right: `my_list[2:]`
gives you `['a','list']`. If you want every other, or every third, or every nth item in the list, you can use another colon and number to specify
which elements to include in your new list: `my_list[0:4:2]` grabs every other element from `my_list` between the indices 0 and 4, resulting in
`['This','a']`. This is not exactly clear from just looking at the syntax, so play around with slicing lists to see what you can do with them!

#### Lists and `len`

Remember how we used the function `len` earlier to see how long our string was? We can use the same function to tell how long our list is!
In the running example we have going on here, `len(my_list)` would give you back the value `4` since we have four items in the list. Makes
sense I hope.


#### Modifying Lists

Like I mentioned before, lists are mutable, so the elements inside a list can be changed. To do this, we use the subscript operator again, 
this time using the assignment operator, `=`, to give a new value to the element at that position. Remember that `my_list[2]` is `'a'` from
our previous example. If we wanted to change that to `'the'` we could do this: `my_list[2] = 'the'`. Now `my_list` looks like this: 
`['This','is','the','list']`!

#### List Functions

There are a whole bunch of special functions that do things to lists that you might find useful. I'll tell you about a few here, but I just
want you to be familiar with how to use them. These are different than the functions we've seen already because they're what we call "built-in"
to the list data type. To use them, we put a `.` after the list and then put the name of the function followed by `()`. Some methods require 
you to put something into the `()` for the function to work, 

What if we have an empty list and we want to put a value into it?
Any index we try to subscript will give us an `out of bounds` error, since it's empty! For that we have a function called `append` that 
puts the new item at the end of the list. You put the new item to append inside the `()`. If the list is empty, the new item simply becomes 
the first element in the list (index `0`). Example: `my_list.append('!')`

What if we want to remove a particular element and make the list shorter? Well there's an aptly named function called `remove` that takes
care of that for us! We just tell it which element to remove and it will do it! If the element you asked it to remove does not exist you 
will get an error and your program will break. Also, if that element is in the list multiple times it will only remove the first one it finds.
Example: `my_list.remove('a')`

What if we want to know if an item is in a list? Well there's a special operator called `in` that makes this really easy. It returns `True` or 
`False` depending on if the element is in the list. So `'a' in my_list` would be `True`, while `'A' in my_list` would be `False`. Not exactly
a function, but very useful either way.

What if we want to know how many times an element is in there? There is a method called `count` that will tell you! So if you have a list of 
numbers like this, `test_list = [1,4,7,2,9,3,1,6,8]`, then `test_list.count(1)` will give you back a `2`!

What if we want to know the index of a particular item in a list? Use the `index` method to find it! Be warned, if the item is not in the list
you WILL get an error.

There are a lot more functions and intricate details around lists. You can see [this site](https://www.tutorialspoint.com/python/python_lists.htm)
for some more specifics if you want, but I think these are some of the most important things to know.


## Tuples

Tuples (pronounced two-pulls) are very much like lists, except for the fact that they're immutable (you can't change it's values once it's made). This makes them useful
for things that shouldn't change but need to be ordered. Like x,y coodinates maybe? Lets see how they work.

**NOTE** If you want to convert a list or other compatable type into a tuple, you can do so by passing that element into the `tuple()`
function.

#### Creating tuples

Instead of using square brackets to declare a list, we use parentheses to declare a tuple: `my_tuple = ()`. If you put nothing inside a tuple it
is an empty tuple. Keep in mind you cannot add things to it since it is immutable. To declare a tuple with things inside, you simply put the
elements of the tuple inside of the parentheses: `my_tuple = ("This", "is", 1, "tuple")`. As you can see, tuples don't care if you have 
different data types inside it, just like lists. 

**NOTE** if you want a tuple with only one element, you must put a comma after that element,
even though it is the only one: `lonely_tuple = ("all alone",)`.


#### Accessing tuples

You can use the subscript operator the exact same way with tuples as with lists. Slicing works the same way too. So does `len`.

Tuples are pretty basic compared to lists, but can be useful if you don't want to be able to change the elements in a list of items. Like I 
mentioned before, say you want to keep a variable that holds the x and y coordinates of a building in your game. That building never moves,
so it'll be safer to store it's coodinates inside a tuple so you know it won't get changed on accident. I typically don't use tuples very often,
but it's important to know HOW to use them just in case they ever come up! Let's move on and talk about my favorite of Python's data types though!

## Dictionaries!!!

Dictionaries are awesome. In other languages they are called **maps**, but the term dictionary probably makes more sense to beginners. Imagine
you stored the definitions for 100 words in a list and you wanted to find a particular one. You would have to check every single element in that
list until you found it, going along from index 0 to 99. If it was the last element in the list you would have wasted your time 98 times! Now
checking 100 elements might not seem so bad, and your computer could probably do it faster than you can blink. But imagine you were doing the 
definitions for every word in the Engligh language! That's hundereds of thousands of words. That could take some time, and would be a huge waste
of energy since we really only care about ONE of the definitions. Enter the Python dictionary. Dictionaries are like key-value pairs, that allow
you to find elements really quickly based on their key. So for every definition you want to store, you give the dictionary a key which identifies
that specific definition (just like the way real dictionaries work right?). Then when you want a particular value, you just give the dictionary 
the corresponding key! This is probably confusing though, so lets take a look at how this works!

#### Creating dictionaries

To create an empty dictionary we use curly braces, `{}`, like so: `my_dict = {}`. This initializes a new dictionary with no keys or values.
You can also use the `dict()` function to make an empty dictionary. If you want to initialize the dictionary with values, you can put them the
key-value pairs inside the curly braces separated by a colon, using commas to separate key-value pairs. Take a look at the example below to see
how this works.

{% highlight python linenos %}
my_dict = {
    "name":"PJ Tatlow",
    "age":23,
    "phones_owned":["Nokia","Some Windows Phone","iPhone 3G","iPhone 3GS","Motorola Atrix","etc..."],
    "spouse" : {
            "name": "Trisha Tatlow",
            "age": 23
        }
    }

{% endhighlight %}

Does that make sense to you? Don't get weirded out by the fact that I put things on different lines. That's just to make it easier to read.
In this example, I made a dictionary called `my_dict` that has four **keys** ("name","age","phones_owned","spouse") and each of these keys
have a different type of value! The value of "name" is a string, the value of "age" is an integer, the value of "phones_owned" is a list, 
and the value of "spouse" is another dictionary! Isn't that awesome?!

Most of the time, the keys in your dictionary will be strings, but you can have any kind of immutable data type so numbers and even tuples will
work too. Something very important to remember is that your key can only map back to a **single** value. Each key must be unique! If you try to 
add a key-value pair with a key that already exists, you will end up overwriting the value that already corrosponds to that key, and if you're
not trying to you can really mess things up easily. But while keys must be immutable, the values in a dictionary can be of **ANY** type.

#### Accessing dictionaries

Again, we're going to use the subscript operator `[]` to get the values from a dictionary, but rather than put the index of the item we want
into the square brackets, we're going to put the key we're looking for! Again, this can be a string, number, or tuple, but will usually be a
string.