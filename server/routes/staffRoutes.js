import { Router } from "express";
import { addLocation, addStaff, executeSearchQuery, getAllData, getTimetable } from "../controllers/staffControllers.js";
import verifyToken from '../middleware/verifyToken.js'

const router = Router()

router.get('/getStaff/:userid', verifyToken, getTimetable)
router.get('/all', getAllData)

router.post('/addstaff/:author', verifyToken, addStaff)
router.post('/addlocation/:timetableID/:dayID/:timeSlotID', verifyToken, addLocation)
router.post('/search', executeSearchQuery)

export default router;