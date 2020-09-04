import mongoose from 'mongoose';
const gradeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true
  },
  lastModified: {
    type: Date,
    require: true
  }
});

export default mongoose.model('Grades', gradeSchema);