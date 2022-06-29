/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Katie Liu
 *      Student ID: 018889121
 *      Date:       Apr 5, 2022
 */

function createProductCard(product) {
  // Create two <div> elements (will be nested)
  const newDiv = document.createElement("div");
  const newDivCard = document.createElement("div");

  // Add the .card class to the inner <div>
  newDivCard.classList.add("card"); // add class attribute

  // Add a click handler to your <div> that will console.log() the product whenever the user clicks it
  const objAsString = JSON.stringify(product);
  newDiv.setAttribute("onclick", `console.log(${objAsString})`);

  // Convert the price in cents to dollars and cents
  // Format it as Canadian Currency
  const priceDollars = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price / 100);

  // Create elements for the product's image, title, description, and price

  const newProdImage = document.createElement("img");
  // set image url, and append to url to crop image and lower quality
  newProdImage.src = product.imageUrl + "?auto=format&fit=crop&w=188&q=80";
  newProdImage.classList.add("card-image"); // add class attribute
  newProdImage.alt = product.title; // set alt attribute
  newProdImage.style = "width:100%"; // set style attribute

  const newDivContainer = document.createElement("div"); // will contain the title, desc, price
  newDivContainer.classList.add("container"); // add class attribute

  const newProdTitle = document.createElement("h5");
  const newProdDesc = document.createElement("p");
  const newProdPrice = document.createElement("footer");
  newProdPrice.id = "card-footer";

  // put text in between tags
  newProdTitle.innerHTML = product.title;
  newProdDesc.innerHTML = product.description;
  newProdPrice.innerHTML = priceDollars;

  // Append child elements to parent elements
  newDivContainer.appendChild(newProdTitle); // title goes in div container
  newDivContainer.appendChild(newProdDesc); // desc goes in div container

  newDivCard.appendChild(newProdImage); // image goes in div card
  newDivCard.appendChild(newDivContainer); // div container goes in div card
  newDivCard.appendChild(newProdPrice); // price footer goes in div card

  newDiv.appendChild(newDivCard); // div card goes in outer div

  // Return the card's <div> element to the caller
  return newDiv;
}

// Show product cards based on a category Object
function loadCards(categoryObj) {
  // Access the document object for our web page, which is in the current window
  var document = window.document;

  // Update the text of the Selected Category Title above your table with the category's name
  var selCatTitle = document.querySelector("#selected-category");
  selCatTitle.innerHTML = categoryObj.name;

  // get flex container that holds cards
  var flexContainer = document.querySelector("#category-products");

  // get products
  var products = window.products;

  // Filter your products Array to get
  // i. All products in the chosen category
  // ii. All products that are NOT discontinued
  var productsFiltered = products.filter((obj) => {
    return obj.categories.includes(categoryObj.id) && !obj.discontinued;
  });

  // Clear the current tags inside flex container
  flexContainer.innerHTML = "";

  // Loop over your filtered product list and add them inside container
  productsFiltered.forEach((prod) => flexContainer.appendChild(createProductCard(prod)));
}

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Create an event handler to run when the page is loaded
window.onload = function () {
  // Access the document object for our web page, which is in the current window
  var document = window.document;

  // get categories
  var categories = window.categories;

  // Show a list of cards
  // By default, use first category
  loadCards(categories[0]);

  // Create all of the buttons for your store's Categories
  for (let i = 0; i < categories.length; i++) {
    // Loop through all of your category objects and create a <button> element for each
    const newBut = document.createElement("button");

    // Use each Category's name for the button's text
    newBut.innerHTML = categories[i].name;

    // add the newly created button as a child node of nav menu
    var navMenu = document.querySelector("#menu");
    navMenu.appendChild(newBut);

    // When the button is clicked, show that category's product cards
    newBut.addEventListener("click", () => loadCards(categories[i]));
  }
};

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
