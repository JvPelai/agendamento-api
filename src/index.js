import express from "express";
import cors from "cors";
import { db } from "./database/index.js";
import router from "./routes/index.js";
import { Appointment } from "./models/AppointmentModel.js";
import { Calendar } from "./models/CalendarModel.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await db.sync();
    console.log("Server is running");
  } catch (err) {
    console.log(err);
  }
});
