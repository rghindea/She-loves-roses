document.addEventListener("DOMContentLoaded", displayAllProducts);
const mainContainer = document.querySelector(".main");

function getAllProducts() {
  const url = "https://668e5802bf9912d4c92de20c.mockapi.io/products";
  return fetch(url).then((response) => response.json());
}

function displayAllProducts() {
  getAllProducts().then(
    (products) =>
      (mainContainer.innerHTML = products
        .map(
          (product) =>
            `
      <div class="product-card flex-col gap-20 items-center justify-between">
         <h3 class="card-title">${product.name}</h3>
         <img ../images/src=${product.imageUrl} width="150px"/>
         <p class="card-price">${product.price} lei</p>
      </div>   
      `
        )
        .join(" "))
  );
}
