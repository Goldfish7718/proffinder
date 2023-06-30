import Staff from "../models/staffSchema.js";
import Profile from "../models/profileSchema.js";

export const addStaff = async (req, res) => {
    try {
        const { author } = req.params;

        const potentialProfile = await Profile.findById(author)

        if (!potentialProfile)
            return res
                .status(400)
                .json({ message: "No Profile Found with the given ID" })

        if (potentialProfile.initiated)
            return res
                .status(200)
                .json({ message: "Profile Is already Intiated" })

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const timeSlots = ['10:25 - 11:20', '11:20 - 12:15', '01:05 - 02:00', '02:00 - 02:55', '03:05 - 04:00', '04:00 - 04:55']

        const newStaff = new Staff()

        newStaff.author = author;
        
        for (let i = 0; i < days.length; i++) {
            newStaff.days.push({ dayName: days[i], timeSlots: [] })

            for (let j = 0; j < timeSlots.length; j++) {
                newStaff.days[i].timeSlots.push({ timeSlotName: timeSlots[j] })
            }
        }

        potentialProfile.staffProfileID = newStaff._id
        potentialProfile.initiated = true

        await potentialProfile.save()
        await newStaff.save()

        res
            .status(200)
            .json({ newStaff, potentialProfile })
    } catch (err) {
        res 
            .status(500)
            .json({ messgae: "Internal Server Error" })
    }
}

export const getTimetable = async (req, res) => {
    try {
        const userID = req.params.userid
        const potentialUser = await Profile.findById(userID)

        if (!potentialUser)
            return res
                .status(400)
                .json({ message: "User Does Not exist" })

        const timetable = await Staff.findById(potentialUser.staffProfileID)

        if (!timetable)
            return res
                .status(400)
                .json({ message: "Not Initiated" })

        res
            .status(200)
            .json({ timetable })
        
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Internal Server Error" })
    }
}

export const addLocation = async (req, res) => {
    try {
        const { timetableID, dayID, timeSlotID } = req.params;
        const { location } = req.body

        const timetable = await Staff.findById(timetableID);

        if (!timetable)
            return res
                .status(400)
                .json({ message: "No timetable found with provided ID" })

        const day = timetable.days.find(day => day._id == dayID)

        if (!day)
            return res
                .status(400)
                .json({ message: "No subdocument DAY found with the given ID" })

        const timeSlot = day.timeSlots.find(timeSlot => timeSlot._id == timeSlotID)

        if (!timeSlot)
            return res
                .status(400)
                .json({ message: "No subdocument TIMESLOT found with the given ID" })

        timeSlot.location = location;

        await timetable.save()

        res
            .status(200)
            .json({ timetable })
        
    } catch (err) {
        res 
            .status(500)
            .json({ message: "Internal Server error" })
    }
}

export const getAllData = async (req, res) => {
    try {
        const profiles = await Profile.find({ initiated: true })
        const timetables = await Staff.find({})

        res
            .status(200)
            .json({ profiles, timetables })
    } catch (err) {
        res
            .status(500)
            .json({ message: "Internal server error" })
    }
}

export const executeSearchQuery = async (req, res) => {
    try {
        const { profileID, dayName, timeSlotName } = req.body;

        const profile = await Profile.findById(profileID);

        if (!profile)
            return res
                .status(400)
                .json({ message: "No profile found with provided ID" })

        const timetable = await Staff.findById(profile.staffProfileID);

        if (!timetable)
            return res
                .status(400)
                .json({ message: "No timetable found with provided ID" })

        const day = timetable.days.find(day => day.dayName == dayName)

        if (!day)
            return res
                .status(400)
                .json({ message: "No subdocument DAY found with the given ID" })

        const timeSlot = day.timeSlots.find(timeSlot => timeSlot.timeSlotName == timeSlotName)

        if (!timeSlot)
            return res
                .status(400)
                .json({ message: "No subdocument TIMESLOT found with the given ID" })

        const { location } = timeSlot
        const { fName, lName } = profile

        const result = {
            name: `Prof. ${fName} ${lName}`,
            dayName,
            timeSlotName,
            location
        }

        res
            .status(200)
            .json({ result })
    } catch (err) {
        res
            .status(500)
            .json({ message: "Internal Server Error" })
        console.log(err);
    }
}
