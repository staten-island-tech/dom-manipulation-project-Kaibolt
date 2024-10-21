const DOMSelectors = {
  button: document.getElementById("btn"),
  cardHeader: document.querySelector(`#inputN`),
  cardDescription: document.querySelector(`#inputD`),
  cardImage: document.querySelector("#inputI"),
  container: document.getElementById("container"),
  form: document.querySelector("form"),
};

function addCard() {
  let cH = DOMSelectors.cardHeader.value;
  let cD = DOMSelectors.cardDescription.value;
  let cI = DOMSelectors.cardImage.value;
  const cardHTML = `<div class=card> 
    <h1 class="card-header">${cH}</h1> 
    <img src="${cI}" class="card-img">
    <p class="card-desc">${cD}</p> <button class="remove"> Remove Card</button></div>`;
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML); // Insert the cardHTML
  // I did have to ask ChatGPT for help with my remove button, but you did say that we have to be able to understand the code, so I'll ask any questions I have left later.
  const removeButton = DOMSelectors.container.querySelector(
    //Make a variable for the remove button which is a querySelector for the the div with the card class, I dont understand the last-child part, as it [thankfully] doesn't target the last child.
    // and then the .remove class.
    ".card:last-child .remove"
  );
  removeButton.addEventListener("click", function () {
    removeButton.parentElement.remove(); //So when this button is clicked, it will remove the parent element (the card) through the use of .remove function
  });
}

function clearText() {
  DOMSelectors.cardDescription.value = "";
  DOMSelectors.cardHeader.value = "";
  DOMSelectors.cardImage.value = "";
}
DOMSelectors.button.addEventListener("click", function () {
  addCard();
  clearText();
});
