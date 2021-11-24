import express from "express";
import { db } from "./database/index.js";
import router from "./routes/index.js";
import { Appointment } from "./models/AppointmentModel.js";
import { Calendar } from "./models/CalendarModel.js";

const app = express();
app.use(express.json());

app.use(router);

app.listen(8080, async () => {
  try {
    await db.sync();
    console.log("listening on port 8080");
  } catch (err) {
    console.log(err);
  }
});