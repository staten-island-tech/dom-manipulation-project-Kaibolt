const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  description: document.querySelector(".card-desc"),
  container: document.querySelector(".container"),
};
DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
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
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);
let album = {
  name: "Abbey Road",
};
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
  <h2 class="card-header"> ${album.name}</h2><div/>`
);

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
