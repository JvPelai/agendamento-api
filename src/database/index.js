import Sequelize from "sequelize";
const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/database.sqlite",
});

export { db };
