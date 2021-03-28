import mongoose from 'mongoose';


const orderSchema = mongoose.Schema({  
    "user_id": { type: String, required: true},
    "product_id": { type: String, required: true},
    "payment": { type: Boolean, required: true},
    "amount": { type: Number, required: true},
    "delivery_date": { type: Date, required: true},
    "Pickup_address": { type: String, required: true},
})
var Order = mongoose.model('Food_Order', orderSchema);

export default Order;