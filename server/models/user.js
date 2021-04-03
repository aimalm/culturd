import mongoose from 'mongoose';
import  uniqueValidator from 'mongoose-unique-validator';



const userSchema = mongoose.Schema({  
    "Type_of_User": { type: String, required: true},
    "Name": { type: String, required: true},
    "Last_Name": { type: String, required: true},
    "Email": { type: String, required: true, unique: true},
    "password": { type: String, required: true},
    "Contact_Number": { type: Number},
    "Address": { type: String},
    "Profile_Picture": { type: String},
    "Created_date": { type: Date, default: Date.now()},
    "Update_date": { type: Date},
})

userSchema.plugin(uniqueValidator, { message: 'Email or user name already in use!' });

var User = mongoose.model('Users', userSchema);

export default User;