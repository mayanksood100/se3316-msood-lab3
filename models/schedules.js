const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Schedule Schema and Model
const SchedulesSchema = new Schema({
    scheduleName: {
        type: String,
        required:[true, 'Schedule Name is required!'],
        unique:true
    },

    subject_schedule:{
        type: String
    },

    courseNumber_schedule:{
        type:String
    }
});

const Schedule = mongoose.model('schedule', SchedulesSchema);

module.exports = Schedule;