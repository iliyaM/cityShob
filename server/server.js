const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cors = require('cors');

const { SearchItem } = require('./models');
const { mockData } = require('./mockData');
const { findSearchItems } = require('./findSearchItems.service');

// Replace with your actual MongoDB password
const password = '';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://iliyuskeisar:${password}@funcluster.lbohy.mongodb.net?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to MongoDB');
    insertMockData();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Insert mock data into the database
const insertMockData = async () => {
  try {
    // Delete existing data to avoid duplicates
    await SearchItem.deleteMany();

    // Insert the mock data
    await SearchItem.insertMany(mockData);

    console.log('Mock data inserted successfully');
  } catch (err) {
    console.error('Error inserting mock data:', err);
  }
};

app.get('/searchItems', async (req, res) => {
  try {
    const items = await findSearchItems(req.query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
