let fruits = ['apples', 'bananas', 'cherries', 'dates', 'elderberry'];
let capitalizedFruits = [];
for(let i=0; i<fruits.length; i++) {
  let capitalized = fruits[i].toUpperCase();
  capitalizedFruits.push(capitalized);
}

console.log(capitalizedFruits)

// idiom
let capFruits = fruits.map( f => f.toUpperCase() );
// let capFruits = fruits.map( function(f) { return f.toUpperCase(); } );

console.log(capFruits);


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

// Example of setting a property to be a function

// function handleClick(){
//   alert("hello");
// }
// let button = document.getElementById("my-button")
// // set the callback `onclick`
// button.onclick = handleClick;

// button.onclick = function() {
//   alert("hello");
// }

// button.addEventListener('click', function(){
//   alert("hello");
// })

// button.onclick = () => {alert("hello")}
// button.addEventListener('click', () => {alert("hello")} );



// Let's call this "map"
let fruitElements = [];
// 1. convert fruit names to html
for(let i=0; i<fruits.length; i++) {
  let element = `<li> ${fruits[i]} </li>`;
  fruitElements.push(element);
}
// 2. join the html into a single string
let fruitsHTML = '';
for(let i=0; i<fruitElements.length; i++) {
  fruitsHTML += fruitElements[i] + "\n";
}
console.log(fruitsHTML)


// 1. convert fruit names to html
let fruitList = fruits.map( fruit => `<li> ${fruit} </li>` );
// 2. join the html into a single string
let fruitHTML2 = fruitList.join("\n");
// 3. insert the produced html into the DOM
// document.querySelector("ul").innerHTML = fruitHTML;
console.log(fruitHTML2);

let fruitHTML3 = fruits
  .map( f => `<li> ${f} </li>` )
  .join(", ");
console.log(fruitHTML3)

let fruitHTML4 = fruits
.map( f => `<b>${f}</b>`)
.map( f => `<i>${f}</i>`)
.map( f => `<li>${f}</li>`)
.join("\n");
console.log(fruitHTML4);

let fruitHTML5 = fruits
.map( f => `<li><i><b>${f}</b></i></li>`)
.join("\n");
console.log(fruitHTML5);

