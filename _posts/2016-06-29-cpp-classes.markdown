---
layout: post
title:  "C++ Classes and Objects"
date:   2016-06-29 16:10:00 -0700
categories: c++ cpp objects classes oop tutorial reference
---
Classes are what we use to define objects in C++. An object is basically like a custom data type that can hold different types of data and have functions. This is a basic example of a class declaration.

{% highlight cpp linenos %}
//Student.h
class Student {
private:
 string name;
 int id;
public:
 
 static int numStudents;
 
 Student(string new_name, int new_id) : name(new_name), id(new_id) {
  Student::numStudents++;
 };
 string getName();
 int getId();
 ~Student() {
  Student::numStudents--;
 };
 
};

{% endhighlight %}
{% highlight cpp linenos %}
//Student.cpp
#include "Student.h"

string Student::getName() {
  return this->name;
}

int Student::getId() {
  return this->id;
}
{% endhighlight %}

The first thing to notice is that we have two files for our class. There is a `.h` (header file) and a `.cpp`. We do this so that we can separate the class definition from the implementation. 
Essentially, the 'what' of the class goes in the `.h` and the 'how' of the class goes in the `.cpp`. By convention these files have the same names as your class. For reasons we'll go over later, 
you should probably do this class in just the `.h` file, but I wanted to show how you would declare the functions in the `.cpp`

Inside this student class we have a couple of different **data members** and a couple of **member functions**. These properties are stored in different sections of the class, 
defined using the keywords `private` and `public`. Items in the private section are only accessable within the class itself. If you were to ask a student object for it's name like this: "`my_student.name`", 
your program would laugh in your face and die. Conventially, you should put data members in the private section is to protect them from being accidentally changed. You don't want to have a bug that changes 
the id of a student and keeps you from being able to find it later. One notable exception is static data members, which we talk about later. In the same breath, unless it is a function that you only use internally, member functions should be public so you can use it. 
There is also the option for a `protected` section which allows any classes that **inherit** from the base class to access those data members. We'll talk about inheritance in a different post, lets discuss data members first.

### Data Members
Data members are the information the object holds, the `string name`, `int id`, and `static int numStudents` in this case. But a data member can be of any data type, including another class. They can be pointers too! One important thing to note is the keyword `static` in front of `numStudents`. In a C++ class, a static data member has the same value across **ALL** instances of that object. So if I had 200 student objects, I could ask each one of them for their `numStudents` data member and they would all give me back the same number. This is useful for keeping track of how many objects you've initialized, the type of a certain object, or any other variable that has the same value acoss all objects. 

To use a static data member, you must realize that it is not a property of any single object, but of the whole class. To give it a value, you could do something like this in your `main` function:

{% highlight cpp linenos %}
//main.cpp
#include "Student.h"

int main() {
  Student::numStudents = 0;
  Student bob("Bob", 123);
  Student larry("Larry", 124);
  cout << Student::numStudents << endl; // prints 2
}
{% endhighlight %}

### Member Functions
Member functions on the other hand are the functions that the class has associated with it. In our case we see `string getName();` and `int getId();` as the main member functions. The other two functions are special, `~Student();` is called the **distructor**, while the `Student(string new_name, int new_id)` is the **constructor**. These functions are called when the object is created and destroyed (which should make sense...). 

Now you might ask, "What about that weird stuff after the contructor?" And I would say, "Oh, you mean the initialization list? I'm glad you asked!" The initialization list basically sets up your object with the values passed into the constructor, and stores them in the data members that are part of the list. As an example, the below code is equivalient.

{% highlight cpp linenos %}
Student(string new_name, int new_id) {
  this->name = new_name;
  this->id = new_id;
  Student::numStudents++;
};
{% endhighlight %}

Hopefully that makes some sense to you. But what about the destructor? What kind of things might we do there? Well that depends! One of the most important things to do is to `delete` any objects you created with the `new` keyword. This will make sure you give back any memory you take, avoiding memory leaks. You can also do anything else that you might need to do when you get rid of an object; decrement a static data member, print something out to the screen, etc. Most of the time you might leave it blank, and that's okay. 




