import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({  
    "dishName": { type: String, required: true},
    "ingredients": { type: Object, required: true},
    "vegetarian": { type: Boolean, required: true},
    "keywords": { type: Object, required: true},
    "dishDescription": { type: String, required: true},
    "cooker": { type: String, required: true},
    "cookerImage": { type: String, required: true},
    "cookerScore": { type: Object, default: "star"},
    "price": { type: Number, required: true},
    "pickupDate": { type: Date, required: true},
    "address": { type: String, required: true},
    "imageUrl": { type: String},
})

var food = mongoose.model('foods', foodSchema);

export default food;