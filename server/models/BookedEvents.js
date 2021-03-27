import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    User_Id: { type: String},
    Event_Id: { type: String },
    amount_of_tickets: { type: Number, required: true  },
    Payment: { type: Boolean, required: true },
    Booking_date_Date: { type: Date, default: Date.now() },   
})

var Booking = mongoose.model('BookedEvent', bookingSchema);

export default Booking;