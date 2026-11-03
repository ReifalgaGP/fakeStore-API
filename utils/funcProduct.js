const dataProduct = [];
const id = Math.floor(Math.random() * 100) + 1;

export function create({ title, price, description, image }) {
  const product = { id, title, price, description, image };
  dataProduct.push(product);
  return product;
}
