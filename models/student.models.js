const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
       type: String,
       required: true
     },
    rollno: {
       type: String,
       required: true
      },
      dateOfBirth: {
        type: Date,
        required: true
      },
      level: {
        type: String,
        required: true
      },
      section: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: true
      },
      fatherName: {
        type: String,
        required: true
      },
      motherName: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      contactNumber: {
        type: String,
        required: true
      }
  },
  {
    collection: 'students'
  }
)

module.exports = mongoose.model('Student', studentSchema)





