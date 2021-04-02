import mongoose from 'mongoose';


const orderSchema = mongoose.Schema({  
    "user_id": { type: String, required: true},
    "product_id": { type: Object, required: true},
    "payment": { type: Boolean, required: true},
    "amount": { type: Number, required: true},
    "pickup_date": { type: Date, required: true},
    "Pickup_address": { type: Object, required: true}
})
var Order = mongoose.model('Food_Order', orderSchema);

export default Order;