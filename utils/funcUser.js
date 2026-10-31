const datasUsers = [];
let id = Math.floor(Math.random() * 100) + 1;

export function create({ name, email, password }) {
  const user = { id: id++, name, email, password };
  datasUsers.push(user);
  return user;
}

export function update(id, { name, email, password }) {
  const user = datasUsers.find((value) => value.id === id);
  if (!user) return null;

  user.name = name;
  user.email = email;
  user.password = password;
  return user;
}

export function remove(id) {
  const data = datasUsers.findIndex((value) => value.id === id);
  if (data === -1) return null;

  const [dataRemove] = datasUsers.splice(data, 1);
  return dataRemove;
}
