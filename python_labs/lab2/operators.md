---
layout: labs
title: Intro to Python Operators
description: Arithmatic, Comparisons, Logic, and More
---

Don't be afraid of the term operator, you've been using them since kindergarden. It's just a fancy word for a symbol that does something. 
You've probably already seen one, the assignment operator `=`! This takes the literal or variable on the right and assigns it's value to 
the variable on the left. These things on the right and left are known as operands. Some operators take operands on both sides (`1 + 1`),
but some only take operands on one side (`~1001`).

### Arithmetic Operators
This is how we do math.
<div class="table-responsive">
    <table class="table table-hover reference-table table-responsive">
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
          operator, combining two strings or lists together. <strong>DO NOT</strong> try to add numbers and strings/lists together. Or do. Your funeral.</td>
          <td><code>1 + 1</code><br><code>"Hi " + "Dad"</code><br><code>[1,2]+[3,4]</code></td>
          <td><code>2</code><br><code>"Hi Dad"</code><br><code>[1,2,3,4]</code></td>
        </tr>
        <tr>
          <td class="center-cell"><code>-</code></td>
          <td>Subtraction operator. Again, you should be familiar with this. Subtracts the number on the right from the number on the left. Also acts as
          the negation operator for numbers, making a positive number negative or a negative number positive.</td>
          <td><code>1 - 1</code></td>
          <td><code>0</code></td>
        </tr>
        <tr>
          <td class="center-cell"><code>*</code></td>
          <td>Multiplication. Multiplies the two numbers together. Also, "multiplies" a string or list. Useful when you want to initialize a list
          of a specific size with a certain value.</td>
          <td><code>2 * 3</code><br><code>"W"*3</code><br><code>[0]*3</code></td>
          <td><code>6</code><br><code>"WWW"</code><br><code>[0,0,0]</code></td>
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
        <tr>
          <td class="center-cell"><code>//</code></td>
          <td>Floor division. Divides the number on the left by the number on the right, rounding any decimal places down.</td>
          <td><code>6 // 2</code><br><code>3 // 2</code><br><code>3 // 2.0</code></td>
          <td><code>3</code><br><code>1</code><br><code>1.0</code></td>
        </tr>
    </tbody>
    </table>
</div>
### Comparison Operators
All of these operators change your comparison statement to the booleans `True` or `False`.
<div class="table-responsive">
    <table class="table table-hover reference-table table-responsive">
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
      <tr>
        <td class="center-cell"><code>is</code></td>
        <td>Identity operator. Checks to see if the two items you're comparing are the same item. If you're comparing objects,
        this will make sure the operands are referencing the same object in memory. Don't use this to compare basic types like
        strings ints or floats. The <code>is</code> operator is the proper way to check if your variable is <code>None</code> (meaning
        don't do <code>my_variable == None</code>. <code>None</code> is a 
        <a target="_blank" href="https://docs.python.org/2/library/constants.html">special constant</a> that represents the absence of 
        a value. For the examples, pretend <code>test1 = "test"</code> and <code>test2 = None</code>.</td>
        <td><code>test1 is None</code><br><code>test2 is None</code></td>
        <td><code>False</code><br><code>True</code></td>
      </tr>
      <tr>
        <td class="center-cell"><code>is not</code></td>
        <td>Negated-Identity operator. Checks to see if the two items you're comparing are <strong>NOT</strong> the same item.
        For the examples, pretend <code>test1 = "test"</code> and <code>test2 = None</code>.</td>
        <td><code>test1 is not None</code><br><code>test2 is not None</code></td>
        <td><code>True</code><br><code>False</code></td>
      </tr>
    </tbody>
    </table>
</div>
### Logical Operators
Use logical operators between boolean statements (things that become `True` or `False`) to make more complex logical statements.
<div class="table-responsive">
    <table class="table table-hover reference-table">
    <thead>
        <th>Operator</th>
        <th width="55%">Description</th>
        <th width="20%">Example</th>
        <th width="15%">Value</th>
    </thead>
    <tbody>
        <tr>
            <td class="center-cell"><code>and</code></td>
            <td>Logical AND operator. For a statement with <code>and</code> to be <code>True</code>, <strong>BOTH</strong> statements
            on either side of the <code>and</code> have to be <code>True</code>. If the first statement is <code>False</code> Python
            won't even check the second one because the whole statement is automatically <code>False</code>. Represented in other languages
            by the symbol <code>&&</code>.</td>
            <td><code>True and True</code><br><code>True and False</code><br><code>False and False</code><br><code>(10 > 7) and True</code></td>
            <td><code>True</code><br><code>False</code><br><code>False</code><br><code>True</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>or</code></td>
            <td>Logical OR operator. For a statement with <code>or</code> to be <code>True</code>, <strong>EITHER</strong> statement
            can to be <code>True</code>. Represented in other languages by the symbol <code>||</code>.</td>
            <td><code>True or True</code><br><code>False or True</code><br><code>False or False</code><br><code>(7 > 10) or False</code></td>
            <td><code>True</code><br><code>True</code><br><code>False</code><br><code>False</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>not</code></td>
            <td>Logical NOT operator. Sometimes called negation. If the statement to the right is <code>True</code> it becomes <code>False</code>
             and vice versa. Represented in other languages by the symbol <code>!</code>. Unlike the other two logical operators, this one
             only acts on the operand on the right.</td>
            <td><code>not True</code><br><code>not False</code><br><code>not (True or False)</code><br><code>not None</code></td>
            <td><code>False</code><br><code>True</code><br><code>False</code><br><code>True</code></td>
        </tr>
    </tbody>
    </table>
</div>

### Assignment Operators
These operators are used to assign values to variables! Most of them are just shortcuts that will save you keystrokes, but it's good to know
them anyway! I don't think examples are necessary here.
<div class="table-responsive">
    <table class="table table-hover reference-table">
    <thead>
        <th>Operator</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td class="center-cell"><code>=</code></td>
            <td>Assignment operator. Assigns the value of the right operand to a variable on the left. Do not put a literal on the left.
            Literals or variables can be on the right.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>+=</code></td>
            <td>Addition-Assignment operator. Adds the two operands together, then assigns that value to the left operand. <code>my_var += 1</code>
            is equivalent to <code>my_var = my_var + 1</code>. Can also be used to add a string onto the end of a string, or combine two lists.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>-=</code></td>
            <td>Subtraction-Assignment operator. Subtracts the operand on the right from the operand on the left, then assigns that value to 
            the left operand. <code>my_var -= 1</code>is equivalent to <code>my_var = my_var - 1</code>.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>*=</code></td>
            <td>Multiplication-Assignment operator. Multiplies the two operands, then assigns that value to the operand on the left. 
            <code>my_var *= 2</code>is equivalent to <code>my_var = my_var * 2</code>. Multiplication of strings and lists works the same way
            as before.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>/=</code></td>
            <td>Division-Assignment operator. Divides the operand on the left by the operand on the right, then assigns that value to 
            the left operand. <code>my_var /= 2</code>is equivalent to <code>my_var = my_var / 2</code>.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>%=</code></td>
            <td>Modulus-Assignment operator. Performs a modulus operation with the two operands and assigns that value to the left operand. 
            <code>my_var %= 2</code>is equivalent to <code>my_var = my_var % 2</code>.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>**=</code></td>
            <td>Exponent-Assignment operator. Raises the left operand to the power of the right operand and assigns that value to the operand on
            the left. <code>my_var **= 2</code>is equivalent to <code>my_var = my_var ** 2</code>.</td>
        </tr>
        <tr>
            <td class="center-cell"><code>//=</code></td>
            <td>Floor-Division-Assignment operator. Divides the operand on the left by the operand on the right, then assigns the rounded down
            value to the left operand. <code>my_var //= 2</code>is equivalent to <code>my_var = my_var // 2</code>.</td>
        </tr>
    </tbody>
    </table>
</div>

### Membership Operator(s?)

<div class="table-responsive">
    <table class="table table-hover reference-table">
    <thead>
      <th>Operator</th>
      <th width="55%">Description</th>
      <th width="20%">Example</th>
      <th width="15%">Value</th>
    </thead>
    <tbody>
        <tr>
            <td class="center-cell"><code>in</code></td>
            <td>Checks to see if the left operand is contained inside the right operand. Right operand can be a string, list, tuple, set,
            or dictionary. Returns <code>True</code> if the item is in the sequence on the right, <code>False</code> otherwise.</td>
            <td><code>1 in [1,2,3,4,5]</code><br><code>"test" in "abctestdef"</code><br><code>2 in [1,3,4,5]</code></td>
            <td><code>True</code><br><code>True</code><br><code>False</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>not in</code></td>
            <td>Checks to see if the left operand is not contained inside the right operand. Right operand can be a string, list, tuple, set,
            or dictionary. Returns <code>True</code> if the item is not in the sequence on the right, <code>False</code> otherwise.</td>
            <td><code>1 not in [1,2,3,4,5]</code><br><code>"test" not in "abctestdef"</code><br><code>2 not in [1,3,4,5]</code></td>
            <td><code>False</code><br><code>False</code><br><code>True</code></td>
            
        </tr>
    </tbody>
    </table>
</div>

### Bitwise Operators
If you don't know what these are, don't worry about them. They are useful for doing some really cool things, but if you're just beginning 
programming you won't use them. I'll write a post about these in the future.
<div class="table-responsive">
    <table class="table table-hover reference-table">
    <thead>
      <th>Operator</th>
      <th width="55%">Description</th>
      <th width="20%">Example</th>
      <th width="15%">Value</th>
    </thead>
    <tbody>
        <tr>
            <td class="center-cell"><code>&</code></td>
            <td>Bitwise AND operator. Computes the binary AND of the operand on the left and the operand on the right.</td>
            <td><code>1010 & 0110</code><br><code>1001 & 1111</code><br><code>0000 & 1111</code></td>
            <td><code>0010</code><br><code>1001</code><br><code>0000</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>|</code></td>
            <td>Bitwise OR operator. Computes the binary OR of the operand on the left and the operand on the right.</td>
            <td><code>1010 | 0110</code><br><code>1001 | 1111</code><br><code>0000 | 1111</code></td>
            <td><code>1110</code><br><code>1111</code><br><code>1111</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>^</code></td>
            <td>Bitwise XOR operator. Computes the binary XOR (exclusive OR) of the operand on the left and the operand on the right.</td>
            <td><code>1010 ^ 0110</code><br><code>1001 ^ 1111</code><br><code>0000 ^ 1111</code></td>
            <td><code>1100</code><br><code>0110</code><br><code>1111</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>~</code></td>
            <td>Bitwise NOT operator. Computes the binary NOT  of the operand on the left and the operand on the right. Essentially flips 
            the bits</td>
            <td><code>~1010</code><br><code>~1111</code><br><code>~0000</code></td>
            <td><code>0101</code><br><code>0000</code><br><code>1111</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>&lt;&lt;</code></td>
            <td>Bitwise Left Shift operator. Shifts the bits of the left operand to the left by the nunmber on the right of the operand.</td>
            <td><code>0001 &lt;&lt; 2</code></td>
            <td><code>0100</code></td>
        </tr>
        <tr>
            <td class="center-cell"><code>>></code></td>
            <td>Bitwise Right Shift operator. Shifts the bits of the left operand to the right by the nunmber on the right of the operand.</td>
            <td><code>0100 >> 2</code></td>
            <td><code>0001</code></td>
        </tr>
    </tbody>
    </table>
</div>

<br><br>
This is not a comprehensive list of all operators in Python, but I think these are definitely the most used ones. Let me know if I missed anything!

Sources:

* [TutorialsPoint](https://www.tutorialspoint.com/python/python_basic_operators.htm)
* [Programiz](https://www.programiz.com/python-programming/operators)
* [Python Documentation](https://docs.python.org/2/library/operator.html)

