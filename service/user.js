const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.database_host,
    port: 3306,
    user: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database_name,
  },
});

//put user
async function register(user) {
  return knex("users").insert({
    name: user.name,
    email: user.email,
    password: user.encryptedPassword,
    salt: user.salt,
  });
}

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

async function updateUser(id,address) {
  await knex
    .table("addresses")
    .where("id", "=", id)
    .update({
    
      addresses: {
        street: address.street,
        city: address.city,
        state: address.state,
        zipcode: parseInt(address.zipcode),
      },
    });

  return;
}
async function getUserByEmail(email) {
  const user_email = JSON.parse(
      JSON.stringify(
          await knex.select()
              .table('users')
              .where('users.email',"=", email)
      )
  );
  return user_email;
}

module.exports = {
  updateUser,
  getUser,
  register,
  getUserByEmail,
};
