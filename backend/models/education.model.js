const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  yearStart: { type: String, required: true, trim: true, minLength: 4, maxLength: 4 },
  yearFinish: { type: String, required: false, trim: true, minLength: 4, maxLength: 4 },
  title: { type: String, required: true, trim: true, minLength: 3 },
  description: { type: String, required: true, trim: true, minLength: 6 },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;