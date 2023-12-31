require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://aneshwarjagdish:FbhOWfhjTmQMeDe6@trendy.m4fetu3.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/project', cors(), require('./routes/project'))

// Start the server

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
