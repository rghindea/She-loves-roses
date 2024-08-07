document.addEventListener("DOMContentLoaded", showProductDetails);

const url = "https://668e5802bf9912d4c92de20c.mockapi.io/products";

async function showProductDetails() {
  const urlSearchParam = new URLSearchParams(window.location.search);
  const productId = urlSearchParam.get("id");

  const response = await fetch(`${url}/${productId}`);
  const product = await response.json();

  document.querySelector(".main").innerHTML = `
  <div class = "details-container">
  <img src="../${product.imageUrl}" width="350px" />
  <p>${product.details}</p>
  </div>`;
}
