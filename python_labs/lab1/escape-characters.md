---
layout: labs
title: Python Escape Characters
description: Newlines, Tabs, and Quotes
---

This post serves as a reference for the different string escape characters in Python. It will help prepare you for [lab 1](/python_labs/lab1.html)
in my own set of Python projects to introduce you to programming. Escape characters are special characters that do different things like add tabs or start a new line. 
Many of them are vestiges of printing to paper rather than to a computer screen. The table below explains a few of the most common ones.

<table class="table table-hover reference-table">
  <thead>
    <th width="14%">Escape Character</th>
    <th width="86%">Description</th>
  </thead>
  <tbody>
    <tr>
      <td class="center-cell"><code>\t</code></td>
      <td>Puts one tab into your output. Approximately equal to four characters, but helpful when trying to align text to the same point.
      Essentially it rounds you up to the closest fourth character. If this is confusing, try it out and see what it does!</td>
    </tr>
    <tr>
      <td class="center-cell"><code>\n</code></td>
      <td>This is the new line or line feed character. It will make any text after it start on the next line.</td>
    </tr>
    <tr>
      <td class="center-cell"><code>\r</code></td>
      <td>This is the carriage return character. Try to image a typewriter starting a new line. The two steps are to pull the paper up 
      so you're the line beneath (<code>\n</code>), and the second step is to push the "carriage" all the way back to the left. The second action is
      what the <code>\r</code> character does. If you print after a <code>\r</code> it will basically just overwrite the text that's already on that line.</td>
    </tr>
    <tr>
      <td class="center-cell"><code>\"</code> or <code>\'</code></td>
      <td>If you want to put quotes in your string it cam become problematic since quotes already surround your string. 
      If you try it, you can end up ending your string rather than including a quote! Put a backslash in front of a single
       or double quote and it will show up perfectly in your string.</td>
    </tr>
  </tbody>
</table>

To use escape characters in your strings, just type them exactly as I'm showing them to you in the table inside of the quotes that surround
your string. For example, `print "\"Line One\"\n\"Line Two\""` will print out like this:

{% highlight python linenos %}
"Line One"
"Line Two"
{% endhighlight %}

See how each part is on it's own line? You can do a lot of formatting like this using escape characters!
