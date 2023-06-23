import { Router } from "express";
import { addStaff } from "../controllers/staffControllers.js";

const router = Router()

router.post('/addstaff', addStaff)

export default router;