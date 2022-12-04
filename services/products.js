//conexion a  MYSQL
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
//revisar
async function get_Product(limit, offset) {
  const products = JSON.parse(
    JSON.stringify(
      await knex.select().table("products").limit(limit).offset(offset)
    )
  );

  return products;
}
async function getproduct_search(name) {
  const pSearch = JSON.parse(
    JSON.stringify(
      await knex
        .select(
          "products.id as ID",
          "products.price as PRICE",
          "products.name as PRODUCT",
          "brands.name as BRAND",
          "categories.name as CATEGORY"
        )
        .table("products")
        .innerJoin("brands", "products.brand_id", "=", "brands.id")
        .innerJoin("categories", "categories.id", "=", "products.category_id")
        .whereLike("products.name", "%" + name + "%")
        .orwhereLike("brands.name", "%" + name + "%")
        .orwhereLike("category.name", "%" + name + "%")
    )
  );
  return pSearch;
}

module.exports = {
  get_Product,
  getproduct_search,
};
//TODO: GET PRODUCT/SEARCH
