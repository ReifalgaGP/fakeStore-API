const dataProduct = [];
const id = Math.floor(Math.random() * 100) + 1;

export function create({ title, price, description, image }) {
  const product = { id, title, price, description, image };
  dataProduct.push(product);
  return product;
}

export function update(id, { title, price, description, image }) {
  const product = dataProduct.find((value) => value.id === id);
  if (!product) return null;

  product.title = title;
  product.price = price;
  product.description = description;
  product.image = image;
  return product;
}

export function remove(id) {
  const product = dataProduct.findIndex((value) => value.id === id);
  if (product === -1) return null;

  const [productRemove] = dataProduct.splice(product, 1);
  return productRemove;
}
