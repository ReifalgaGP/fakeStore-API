const newUsers = [];
let id = 1;

export function create({ name, email, password }) {
  const user = { id: id++, name, email, password };
  newUsers.push(user);
  return user;
}
