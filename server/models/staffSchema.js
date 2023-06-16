import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    days: [
        {
            dayName: String,
            timeSlots: [
                {
                    timeSlotName: String,
                    location: String
                }
            ]
        }
    ]
})

const Staff = mongoose.model('Staff', staffSchema)
export default Staff;


