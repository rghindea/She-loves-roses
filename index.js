// REFACTORIZAREA CODULUI

import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";

document.addEventListener("DOMContentLoaded", displayAllProducts);
const mainContainer = document.querySelector(".main");
const colorFilterContainer = document.querySelector(".colors");

async function displayAllProducts() {
  const products = await getAllProducts();
  mainContainer.innerHTML = products.map(mapProductToCard).join(" ");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      const price = button.getAttribute("data-price");
      const name = button.getAttribute("data-name");
      const imageUrl = button.getAttribute("data-image");

      let cart = JSON.parse(localStorage.getItem("cart")) || {};
      if (cart[productId]) {
        cart[productId].quantity += 1;
      } else {
        cart[productId] = {
          quantity: 1,
          price: price,
          name: name,
          imageUrl: imageUrl,
        };
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
}

//VARIANTA INITIALA A CODULUI

// document.addEventListener("DOMContentLoaded", displayAllProducts);
// const mainContainer = document.querySelector(".main");

// function getAllProducts() {
//   const url = "https://668e5802bf9912d4c92de20c.mockapi.io/products";
//   return fetch(url).then((response) => response.json());
// }

// function displayAllProducts() {
//   getAllProducts().then(
//     (products) =>
//       (mainContainer.innerHTML = products
//         .map(
//           (product) =>
//             `
//       <div class="product-card flex-col gap-20 items-center justify-between">
//          <h3 class="card-title">${product.name}</h3>
//          <img ../images/src=${product.imageUrl} width="150px"/>
//          <p class="card-price">${product.price} lei</p>
//          <a href="../pages/details.html?id=${product.id}">Details</a>
//       </div>
//       `
//         )
//         .join(" "))
//   );
// }
