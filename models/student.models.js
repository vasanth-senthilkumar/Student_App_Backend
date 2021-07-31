const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
       type: String,
       required: true,
       trim: true
     },
    rollno: {
       type: String,
       required: true,
       trim: true
      },
      dateOfBirth: {
        type: Date,
        required: true,
        trim: true
      },
      level: {
        type: String,
        required: true,
        trim: true
      },
      section: {
        type: String,
        required: true,
        trim: true
      },
      gender: {
        type: String,
        required: true,
        trim: true
      },
      fatherName: {
        type: String,
        required: true,
        trim: true
      },
      motherName: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true,
        trim: true
      },
      contactNumber: {
        type: String,
        required: true,
        trim: true
      }
  },
  {
    collection: 'students'
  }
)

module.exports = mongoose.model('Student', studentSchema)





