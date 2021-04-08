import mongoose from 'mongoose';


const orderSchema = mongoose.Schema({  
    "user_id": { type: String, required: true},
    "product_id": { type: Array, required: true},
    "cooker_id": { type: Array, required: true},
    "payment": { type: Boolean, required: true},
    "amount": { type: Number, required: true},
    "order_date": { type: Date, required: true},
    "Pickup_address": { type: Array, required: true}
})
var Order = mongoose.model('Food_Order', orderSchema);

export default Order;