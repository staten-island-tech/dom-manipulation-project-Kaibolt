const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
  description: document.querySelector(".card-desc"),
  picture: document.querySelector(".card-image"),
  container: document.querySelector(".container"),
};

function makeCard() {
  // Function to make a card
  const create = {
    // Variable create is...
    name: DOMSelectors.cardHeader,
    image: DOMSelectors.picture,
    info: DOMSelectors.description,
  };
  return create;
} // The function returns this info
function addCard(Card) {
  const container = DOMSelectors.container;
  const card = document.createElement("div"); // The add element thing from below didn't exist
  card.className = "card";
  card.innerHTML; //[Equal sign before the ;] All code before this is untested, including this line.
  // I think this is similar to the Abbey road with the '' and the $ with the info. Then do the insert adjacent html or element I dont know
  // add the query selector to remove a card and listen for clicks to run a function to remove a card. add an event listener to submit maybe, where it clears the text. But I'm pretty sure it already clears the text. Make a function that does this regardless
}

/*
DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
// Select all list items
const item = document.querySelectorAll("li");
// turn the nodelist into an array
const items = Array.from(item);
//iterate/loop over array and for each element make the color red
items.forEach((el) => (el.style.color = "red"));
const buttons = document.querySelectorAll;
let album = {
  name: "Abbey Road",
};
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
  <h2 class="card-header"> ${album.name}</h2><div/>`
);
*/
// event listener for form
// get values from form for widget objects
// create the card and insert it
// find remove buttons and add event listeners

/* function changeColor() {
  // Fine element with querySelector
  let form = document.querySelector(".enter");
  // Listen for a click event
  form.addEventListener("click", function (event) {
    // Prevents default behavior
    event.preventDefault();
    // Logging the click event
    console.log(event.target);
  });
}
changeColor(); */

/*function addElement(input) {}
const header = document.querySelector("h1");
console.log(header.parentElement);
console.log(DOMSelectors.description);
console.log(DOMSelectors.items); */

/* INFO
   Use a form with inputs to get the name, image and header information
   Clear the information putu in the input boxes
   Have a remove button that gets rid of the specific box it's on
*/
// MDN Links: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404?utm_source=mozilla&utm_medium=devtools-webconsole&utm_campaign=default
