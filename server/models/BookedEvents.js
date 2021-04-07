import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    firstname: { type: String , required: true},
    telephone: { type: String , required: true},
    email: { type: String , required: true},
    country: { type: String , required: true},
    amount_of_tickets: { type: Number, required: true  },
    Booking_date_Date: { type: Date, default: Date.now() },   
})
var Booking = mongoose.model('BookedEvent', bookingSchema);

export default Booking;