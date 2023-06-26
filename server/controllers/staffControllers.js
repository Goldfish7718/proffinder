import Staff from "../models/staffSchema.js";

export const addStaff = async (req, res) => {
    try {
        const { name } = req.body;
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const timeSlots = ['1030TO1120', '1120TO1215', '1215TO0105', '0105TO0200', '0200TO0255', '0305TO0400', '0400TO0455']

        const newStaff = new Staff()

        newStaff.name = name;
        
        for (let i = 0; i < days.length; i++) {
            newStaff.days.push({ dayName: days[i], timeSlots: [] })

            for (let j = 0; j < timeSlots.length; j++) {
                newStaff.days[i].timeSlots.push({ timeSlotName: timeSlots[j] })
            }
        }

        newStaff.save()

        res
            .status(200)
            .json({ newStaff })
    } catch (err) {
        console.log(err);
    }
}
