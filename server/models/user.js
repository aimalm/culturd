import mongoose from 'mongoose';


const userSchema = mongoose.Schema({  
    "Type_of_User": { type: String, required: true},
    "User_Name": { type: String, required: true},
    "Name": { type: String, required: true},
    "Last_Name": { type: String, required: true},
    "Email": { type: String, required: true},
    "Contact_Number": { type: Number, required: true},
    "Address": { type: String, required: true},
    "Profile_Picture": { type: String},
    "Created_date": { type: Date, default: Date.now()},
    "Update_date": { type: Date},
})

var User = mongoose.model('Users', userSchema);

export default User;