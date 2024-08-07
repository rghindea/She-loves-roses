const url = "https://668e5802bf9912d4c92de20c.mockapi.io/products";

export async function getAllProducts() {
  const response = await fetch(url);
  const products = await response.json();

  return products;
}
