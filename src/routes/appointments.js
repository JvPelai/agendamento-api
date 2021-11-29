import { Router } from "express";
import { AppointmentController } from "../controllers/AppointmentController.js";
const router = Router();

router.get("/", AppointmentController.getAppointments);
router.post("/", AppointmentController.createAppointment);
router.put("/:appt_id", AppointmentController.updateAppointment);
router.delete("/:appt_id", AppointmentController.deleteAppointment);
export default router;
