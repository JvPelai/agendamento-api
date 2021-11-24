import { Router } from "express";
const router = Router();

router.get("/", () => console.log("get calendars"));
router.post("/", () => console.log("create calendar"));
router.patch("/:calendar_id", () => console.log("edit calendar"));
router.delete("/:calendar_id", () => console.log("delete calendar"));
export default router;