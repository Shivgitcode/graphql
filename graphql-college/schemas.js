const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
  },
  courseDuration: {
    type: String,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports.Student = Student;
module.exports.Course = Course;
