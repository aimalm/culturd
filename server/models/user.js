import mongoose from 'mongoose';
import  uniqueValidator from 'mongoose-unique-validator';



const userSchema = mongoose.Schema({  
    "TypeOfUser": { type: String, required: true},
    "firstName": { type: String, required: true},
    "lastName": { type: String, required: true},
    "email": { type: String, required: true, unique: true},
    "password": { type: String, required: true},
    "contactNumber": { type: Number},
    "address": { type: String},
    "ProfilePicture": { type: String},
    "CreatedDate": { type: Date, default: Date.now()},
    "UpdateDate": { type: Date},
})

userSchema.plugin(uniqueValidator, { message: 'Email or user name already in use!' });

var User = mongoose.model('Users', userSchema);

export default User;