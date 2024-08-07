const url = "https://668d7a4e099db4c579f31747.mockapi.io/products";

export async function getAllProducts() {
  const response = await fetch(url);
  const products = await response.json();

  return products;
}
