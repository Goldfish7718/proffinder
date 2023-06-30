import mongoose, { Schema } from "mongoose";

const staffSchema = new mongoose.Schema({
    author: {
        required: true,
        type: Schema.Types.ObjectID,
        ref: 'Profile'
    },
    days: [
        {
            dayName: String,
            timeSlots: [
                {
                    timeSlotName: String,
                    location: {
                        type: String,
                        default: 'N/A'
                    }
                }
            ]
        }
    ]
})

const Staff = mongoose.model('Staff', staffSchema)
export default Staff;


