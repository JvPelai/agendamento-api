import Sequelize from "sequelize";
import { db } from "../database/index.js";

const Appointment = db.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  calendarId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export { Appointment };
