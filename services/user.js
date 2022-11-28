const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

//put user

async function getUser() {
  const users = JSON.parse(
    JSON.stringify(
      await knex
        .select(
          "users.id as ID:",
          "users.name as NAME:",
          "addresses.id as ADDRESS ID:",
          "addresses.street as STREET:",
          "addresses.city as CITY:",
          "addresses.state as STATE:",
          "addresses.zipcode as ZIPCODE:"
        )
        .table("users")
        .join("addresses", "users.id", "=", "addresses.user_id")
    )
  );

  return users;
}

async function updateUser(id, user) {
  await knex
    .select()
    .table("users")
    .innerJoin("addresses", "users.id", "=", "addresses.user_id")
    .where("users.id", "=", id)
    .update({
      name: user.name,
      street: user.street,
      city: user.city,
      state: user.state,
      zipcode: parseInt(user.zipcode),
    });

  return;
}

module.exports = {
  updateUser,
  getUser,
};
