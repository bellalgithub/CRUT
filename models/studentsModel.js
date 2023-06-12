const mongoose = require('mongoose');
const {Schema} = mongoose;
const studentsSchema = new Schema(
    {
        Name: String,
        Roll: String,
        Class: String,
        Remarks: String
    },
    {timestamps: true, versionKey: false}
);
const studentsModel = mongoose.model('students', studentsSchema);
module.exports = studentsModel;