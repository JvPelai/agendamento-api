import { Router } from "express";
import { CalendarController } from "../controllers/CalendarController.js";
const router = Router();

router.get("/", CalendarController.getCalendars);
router.post("/", () => console.log("create calendar"));
router.patch("/:calendar_id", () => console.log("edit calendar"));
router.delete("/:calendar_id", () => console.log("delete calendar"));
export default router;