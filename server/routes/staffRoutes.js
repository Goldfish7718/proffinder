import { Router } from "express";
import { addStaff } from "../controllers/staffControllers.js";

const app = Router()

app.post('/addstaff', addStaff)

export default Router;