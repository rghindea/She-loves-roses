const url = "https://668e5802bf9912d4c92de20c.mockapi.io/products";

// Load products in table at page loading
const productsTableBody = document
  .getElementById("products-table")
  .querySelector("tbody");

document.addEventListener("DOMContentLoaded", displayAllProducts);

function getAllProducts() {
  return fetch(url).then((response) => response.json());
}

function getProductById(id) {
  return fetch(`${url}/${id}`).then((response) => response.json());
}

function displayAllProducts() {
  getAllProducts().then((products) => {
    productsTableBody.innerHTML = products
      .map(
        (product) => `
            <tr>
               <td>${product.name}</td>
               <td>${product.price}</td>
               <td>
                  <img src="../${product.imageUrl}" width="50px" />
               </td>
               <td>
                  <button class="edit-${product.id}">
                     <i class="fa-solid fa-pen-to-square">
                     </i>
                  </button>
               </td>
               <td>
                  <button class="delete-${product.id}">
                     <i class="fa-solid fa-trash"></i>
                  </button>
               </td>
               
            </tr>
            `
      )
      .join("");
  });
}

// save new product
const form = document.getElementById("product-form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const imageUrlInput = document.getElementById("image-url");
const detailsInput = document.getElementById("details");
const categoryInput = document.getElementById("category");
const colorInput = document.getElementById("color");
const originInput = document.getElementById("origin");
const saveProductButton = document.getElementById("save-btn");

saveProductButton.addEventListener("click", saveProduct);
// console.log(
//   nameInput,
//   priceInput,
//   imageUrlInput,
//   detailsInput,
//   categoryInput,
//   colorInput,
//   originInput
// );
