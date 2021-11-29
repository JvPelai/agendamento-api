import { Router } from "express";
import { AppointmentController } from "../controllers/AppointmentController.js";
const router = Router();

router.get("/", AppointmentController.getAppointments);
router.post("/", AppointmentController.createAppointment);
router.patch("/:appt_id", () => console.log("edit appointment"));
router.delete("/:appt_id", () => console.log("delete appointment"));
export default router;
