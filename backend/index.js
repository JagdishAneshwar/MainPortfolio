require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const corsOptions = {
  origin: "https://www.thejagdish.com", // Allow only your frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
};

// Apply CORS globally
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/project', require('./routes/project'));

app.get('/', (req, res) => { 
  res.json("Hello, CORS is working!");
});


// Start the server

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
