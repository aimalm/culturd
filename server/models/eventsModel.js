import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    eventTitle: String,
    description: String,
  
    
})

var Events = mongoose.model('Events', eventSchema);

export default Events;