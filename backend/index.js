require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(MOONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/project', cors(), require('./routes/project'))

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
