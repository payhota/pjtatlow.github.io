---
layout: labs
title: Lab 1
description: Intro to Python
---


## Getting Started

Congrats on wanting to learn Python! It's a great language to start out with, and I think you'll really enjoy it. I'm making these
tutorials for a friend of mine who is looking to learn some new skills to help him on the job hunt. The problem when learning a 
a programming language though is that if you don't have any actual projects to do, you never learn how to apply the concepts
you're learning about. So these tutorials will be in the form of "labs" which is similar to what a computer science class at a
university would look like. I'm hoping to be able to give you some projects to work on that will challenge you and force you to
figure things out for yourself. I'm going to put very little actual code. I'll put screenshots of what your final product
should look like, and you'll just try and emulate the same functionality. I'll probably put some stuff here for you to reference 
as you work, but not much. Use the internet! If you have a question I promise somebody else has already asked it and had it answered
probably on [stackoverflow](http://stackoverflow.com).

### Installing Python

Before you get started, make sure you have Python installed on your computer. 

If you're using a Mac, Python 2.6 should be installed by default. If you'd rather use 2.7 (which I'd recommend) 
install [Homebrew (directions here)](http://brew.sh) using your terminal, then type in `brew install python`. That should install 
the latest version of Python 2.7 for you. 

If you're using Windows, I'm so sorry. If you're running on Windows 10, you can enable the bash shell using 
[this tutorial](http://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/).
This comes with Python 2.7 already installed, so this actually isn't too bad. If you're using an older version, you'll have to figure
out the Windows command prompt. You can install [Python from here](https://www.python.org/downloads/windows/), then follow 
[these directons](https://docs.python.org/2/faq/windows.html) to get the command line working. 

Another option if you don't feel like installling anything on your own machine, is [Cloud9](https://c9.io). This is a web-based product
that gives you full access to a computer in the cloud, where you can practice your Python skills. You can access the same files
from any computer so long as it has a web browser (Chrome, Safari, Firefox, Edge are all web browsers), and it has a pretty nice 
interface for writing and running your code. Go check it out!

Once you have Python 2.7 set up on whichever OS you're using, type `python --version`into the terminal and it should tell you that 
you're using Python 2.7! With that, you're ready to go. I'd recommend using a text editor like [Atom](https://atom.io) or 
[Visual Studio Code](https://code.visualstudio.com) to do your coding in. These have nice features that make it easier
for you to catch mistakes! When you create a new Python file, make sure to name it `my_new_file.py` (obviously replacing "my_new_file"
with whatever you want to call the file. Just do yourself a favor and don't put spaces in your file names). This will make sure the editor
recognizes that you're writing in Python. When you're ready to run your code, navigate to your Python file using the terminal and run
`python my_new_file.py`. This will run your program! If you need help with this see 
[this great blog post](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) about using the MacOS/bash terminal.

## The Lab

We're going to create a very simple program that will get you printing some text to the screen. You should get used to working with
the terminal for these labs, as that will be the main way for you to interact with your program. Lets print out some facts about Geek Squad!
Your job is to recreate the output below using strings and escape characters. In Python, string are represented by charcters surrounded
by quotes. We use the `print` keyword to print strings out to the screen.

{% highlight python linenos %}
# as review, here is Hello World!
print "Hello World!"
# You can also print out a multi-line string by using three double quotes
print """this
is 
a
multi-line
string"""
# Each of these lines will show up on it's own line when it is printed
{% endhighlight %}

Try running this to see what happens!

See my blog post about [escape characters](/notes/2016/12/escape-characters) too. You WILL need these to do this lab.

Alright! Now that we have that out of the way, take a look at the image below and make the output of your program look exactly the same.
You will have to use `print` and escape characters to make this work. **NOTE**. The print keyword automatically adds a new line character
to the end of your string, so if you use multiple print statements to do this each one will be on it's own line.

<img src="/img/lab1.jpeg" title="Replicate this output in your own program!" alt="Image of Lab 1" class="full-width-img">

If you're up for an extra challenge, only use the keyword `print` **ONCE**.

<h1 class="text-center">Good Luck!</h1>
