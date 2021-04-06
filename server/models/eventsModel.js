import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    User_Id: { type: String},
    Event_Title: { type: String, required: true },
    Event_Description: { type: String, required: true  },
    Event_Location: { type: String, required: true },
    Event_Date: { type: Date, required: true },
    Event_Duration: { type: Number, required: true },
    Total_Num_Participants: { type: Number, required: true },
    Nationality: { type: String, required: true },
    Ticket_Price: { type: Number, required: true },
    Posted_Date: { type: Date, default: Date.now() },
    Updated_date: { type: Date },
    Offer: {type: String, required: true }
})
var Events = mongoose.model('Events', eventSchema);

export default Events;