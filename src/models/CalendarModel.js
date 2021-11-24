import Sequelize from "sequelize";
import { db } from "../database/index.js";

const Calendar = db.define("calendar", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export { Calendar };
