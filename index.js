const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
};
function addElement(input) {}
const header = document.querySelector("h1");
console.log(header.parentElement);
console.log(DOMSelectors.description);
console.log(DOMSelectors.items);
function changeColor() {
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
changeColor();
