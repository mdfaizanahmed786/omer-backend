const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Add your routes or other middleware here
app.post("/application/add", async (req, res) => {
  const {
    candidateName,
    fatherName,
    motherName,
    dob,
    age,
    mark1,
    mark2,
    aadhar,
    marksObtained,
    rankSecured,
    headmasterName,
    schoolName,
  } = req.body;
  try {
    const newApplication = new ApplicationForm({
      candidateName,
      fatherName,
      motherName,
      dob,
      age,
      mark1,
      mark2,
      aadhar,
      marksObtained,
      rankSecured,
      headmasterName,
      schoolName,
    });
    await newApplication.save();
    res.status(201).json({ message: "Application added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/application/get", async (req, res) => {
  const data = await ApplicationForm.find();
  res.status(200).json(data);
});


mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
