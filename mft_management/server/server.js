const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Hello from the MFT Management server!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
