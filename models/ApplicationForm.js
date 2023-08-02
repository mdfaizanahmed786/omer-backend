const mongoose = require("mongoose");

// Define the schema for the form
const applicationFormSchema = new mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  mark1: {
    type: String,
    required: true,
  },
  mark2: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
  },
  marksObtained: {
    type: String,
    required: true,
  },
  rankSecured: {
    type: String,
    required: true,
  },
  headmasterName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model
const ApplicationForm = mongoose.model("ApplicationForm", applicationFormSchema);

module.exports = ApplicationForm;
