const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const educationsRouter = require('./routes/educations');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection estabilished successfully');
});

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/educations', educationsRouter);

app.listen(port, 'localhost', () => {
  console.log(`Server is running on port ${port}`);
})