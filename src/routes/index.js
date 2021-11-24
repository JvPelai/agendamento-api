import { Router } from "express";
import appointmentRouter from "./appointments.js";
import calendarRouter from "./calendar.js";

const router = Router();

router.use("/calendars", calendarRouter);
router.use("/appointments", appointmentRouter);

export default router;
