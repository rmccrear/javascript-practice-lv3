# Arrow Functions

(See p 124 (p 149 in the PDF) of JavaScript from Beginner to Professional by Laurence Lars Svekis)

## tl;dr

tl;dr: Arrow Functions are a bit of syntactic sugar on JavaScript functions

The Arrow Function syntax lets us write lengthy boilerplate loops in a concise way. Once you know the idiom, it will be easy to read code with one or more loops in them. For example this code can be shortened from this...

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    let capitalizedFruits = [];
    for(let i=0; i<fruits.length; i++) {
      let capitalized = fruits[i].toUpperCase();
      capitalizedFruits.push(capitalized);
    }

...to this...

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    let capitalizedFruits = fruits.map( f => f.toUpperCase() );

## All the details

### Declaring functions

To declare a function, we can use the function keyword like this:

listing 1:

    function boldify(word) {
      let boldWord = `<b> ${word} </b>`;
      return boldWord;
    }

We can do this with arrow function syntax like this:

listing 2:
  
    const boldify = (word) => {
      let boldWord = `<b> ${word} </b>`;
      return boldWord;
    }

This looks a bit confusing if you didn't know that you can assign a function to a variable! What is happening in listing 1 is we are declaring a function called boldify. In listing 2, we first declare a variable called boldify, then assign a function to it. Keep reading to take this step-by-step.

## Function can be assigned to variables

A very special trait of JavaScript is the ability to assign a function to a variable.

listing 3:

    function boldify(word) {
      return `<b> ${word} </b>`;
    }

    function italify(word) {
      return `<i> ${word} </i>`;
    }

    let formatify = boldify;
    console.log(formatify("I am bold!"));
    formatify = italify;
    console.log(formatify("I am italic!"));

In listing 3, we invoke a function stored in the `formatify` variable. It can be italify or boldify. If we wanted we could declare an `underlinify` or a `strikeoutify` function as well. We could assign them to `formatify` to indicate the kind of format we want to use. (Note: all we are doing is changing the "name" of the function. But this concept is really important and special!)

As an example, let's re-write listing 3 with arrow functions. This doesn't save a whole lot of space, but it illustrates that we can use arrow functions and "regular" functions interchangeably (in most cases).

    let boldify = (word) => {
      return `<b> ${word} </b>`;
    }
    let italify = (word) => {
      return `<i> ${word} </i>`;
    }
    let formatify = boldify;
    console.log(formatify("I am bold!"));
    formatify = italify;
    console.log(formatify("I am italic!"));

## Short hand arrow functions

Where arrow functions come in handy is when we use them in short hand. Let's look at an event listener.

    function handleClick() {
      alert("I was clicked!");
    }
    document.getElementById("button-1").addEventListener(handleClick);

This could be re-written with an arrow function in a few different ways. Let's lets start with this...

    const handleClick = () => {
      alert("I was clicked");
    }
    document.getElementById("button-1").addEventListener(handleClick);

If there is only one line, we can shorten this by removing the curly brackets and putting the handleClick on one line. Don't let all the equal signs confuse you. The first is an assignment operator. The second is part of the arrow.

    const handleClick = () => alert("I was clicked");
    document.getElementById("button-1").addEventListener(handleClick);

We can even forgo setting the variable and put it all in one line.

    document.getElementById("button-1").addEventListener( () => alert("I was clicked") );

This "one line" idiom is what arrow functions were made for.

## Using arrow functions with array functions.

The most beautiful usage of arrow functions is with "functional programming". The array methods are a big part of functional programming.

Let's say you want to convert a list in JavaScript to a list in HTML. You could do it like this...

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    let fruitElements = [];
    for(let i=0; i<fruits.length; i++) {
      let element = `<li> ${fruits[i]} </li>`;
      fruitElements.push(element);
    }
    let fruitsHTML = '';
    for(let i=0; i<fruitElements.length; i++) {
      fruitsHTML += fruitElements[i] + "\n";
    }
    document.querySelector("ul").innerHTML = fruitsHTML;

But we can shorten this with the map method. According to the [specs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), the map method "creates a new array populated with the results of calling a provided function on every element in the calling array." This is exactly what the above for loop is doing. But it can be done in idiomatic functional JavaScript concisely like this:

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    let fruitList = fruits.map( fruit => `<li> ${fruit} </li>` );
    let fruitHTML = fruitList.join("\n");
    document.querySelector("ul").innerHTML = fruitHTML;

Note that the `join` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) "returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string."

This is what it would look like in one line in a fluent idiomatic style...

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    document.querySelector("ul").innerHTML = fruits.map( fruit => `<li> ${fruit} </li>`).join("\n");

Once you see the idiom, you'll be able to see at a glance what is meant by the above code, rather than needing to read through all the `for` statements. Sometimes we use whitespace to make it easier to see...

    let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
    document.querySelector("ul").innerHTML = fruits
      .map( fruit => `<li> ${fruit} </li>`)
      .join("\n");

Writing it this way makes use of the syntactic sugar that es6 arrow functions provide and make it clear what is going on at a glance to anyone "in the know" about the idioms.

## An overview of all the flavors of function syntax

Let's summarize all the ways we can create functions. It's up to you how to use them to create easily readable code. Arrow functions can make code harder to read or they can simplify long boilerplate code into concise gems. With practice you'll be able to see the difference!

We can make a function with a function keyword...

    function boldify(word) {
      return `<b> ${word} </b>`;
    }

We can make a function with arrow syntax...

    const boldify = (word) => {
      return `<b> ${word} </b>`;
    }

We can put it all on one line.

    const boldify = (word) => { return `<b> ${word} </b>`; }

If it is just one line, we can omit the curly brackets and the return statement.

    const boldify = (word) => `<b> ${word} </b>`; 

If there is just one argument, we can omit the parenthesis around the argument.

    const boldify = word => `<b> ${word} </b>`; 
