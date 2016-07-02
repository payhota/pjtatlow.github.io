---
layout: post
title:  "Parsing JSON with Python"
date:   2016-07-01 12:50:00 -0400
categories: json nospaces python parsing guide
---

If you're familiar with JSON (Javascript Object Notation) and Python, you probably have noticed that dictionaries and lists look
a lot like objects and arrays. So shouldn't there be an easy way to read in a JSON and get back the Pythonic equivalent? Well, suprise! 
There is. If you're not using a totally ancient version of Python, you can just import the `json` module and it pretty much handles 
things from there! Here's an example.

{% highlight python linenos %}
import json

json_str = '{"employees":[ {"firstName":"John", "lastName":"Doe"}, {"firstName":"Anna", "lastName":"Smith"}, {"firstName":"Peter", "lastName":"Jones"} ]}'

json_dict = json.loads(json_str) #loads is for load string

print json_dict['employees'][0]['firstName'] # prints out John

{% endhighlight %}

What if that JSON is in a file? Well turns out there's an easy way to do that too.

{% highlight python linenos %}
import json

json_file = open("my_data.json", "r") # the json from before is in this file

json_dict = json.load(json_file) # note the s is missing from the end of load

print json_dict['employees'][0]['firstName'] # prints out John

{% endhighlight %}

Alright, so that's nice to know. But lets say you have a JSON in a file called `hometown.json` that looks like this:

{% highlight json %}
{
  city : Bethlehem,
  state : PA,
  founded : 1741,
  population: 74982,
  counties : [ Northampton, Lehigh ],
  celebrities : [
    {
      name: Dwayne The Rock Johnson,
      professions : [wrestler,actor]
    },
    {
      name: Daniel Roebuck,
      profession : [actor]
    }
  ],
  zipcodes : [18015, 18016, 18017, 18018, 18020, 18025]
}

{% endhighlight %}

Notice how it's all red? That's because it's not valid JSON. If you try to load this into Python like we did earlier, you'll get an error
like this `ValueError: Expecting property name: line 2 column 3 (char 4)`.
But I somehow was handed a "JSON" that had this issue, so I'm sure it's happened to others. Here's how to fix it using Python. 

{% highlight python linenos %}
import re, sys

in_file = open("hometown.json","r")
json_str = in_file.read()
in_file.close()

#quotes around right side of colon
json_str = re.sub(r'([{,]\s{0,})([^\"\\,\]\}\{\[ ]{2,})(\s?:)',r'\1"\2"\3', json_str) 
#quotes around left side of colon
json_str = re.sub(r':\s?([^\\,\]\}\{\[]{2,})',r': "\1"', json_str) 
#quotes around odd numbered items in array
json_str = re.sub(r'([\[,]\s{0,})([^\,\]\[\"\{\}]{1,})([,\]])',r'\1"\2"\3', json_str) 
#we do it again to add quotes around even numbered items in array
json_str = re.sub(r'([\[,]\s{0,})([^\,\]\[\"\{\}]{1,})([,\]])',r'\1"\2"\3', json_str) 
#removes quotes from numbers
json_str = re.sub(r'\"(\s{0,}\d+\.?\d+\s{0,})\"',r'\1',json_str) 

out_file = open("hometown_fixed.json","w")
out_file.write(json_str)
out_file.close()

{% endhighlight %}
And here's what the `hometown_fixed.json` looks like:

{% highlight json %}
{
  "city" : "Bethlehem",
  "state" : "PA",
  "founded" : 1741,
  "population": 74982,
  "counties" : [ "Northampton", "Lehigh "],
  "celebrities" : [
    {
      "name": "Dwayne The Rock Johnson",
      "professions" : ["wrestler","actor"]
    },
    {
      "name": "Daniel Roebuck",
      "profession" : ["actor"]
    }
  ],
  "zipcodes" : [18015, 18016, 18017, 18018, 18020, 18025]
}
{% endhighlight %}

Of course you don't have to write it back out to a file, you can load it with `json.loads(your_fixed_string)` and get working with it right away!

If you have problems with any of that code let me know! Leave a comment! I haven't done any crazy testing, but it's worked in every situation I've tried.
