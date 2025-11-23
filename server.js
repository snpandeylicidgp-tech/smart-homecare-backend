// Smart Home Care - server.js (entry point)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smarthomecare';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

app.get('/', (req, res) => res.send('Smart Home Care Backend Running'));

app.listen(PORT, ()=> console.log('Server started on port', PORT));
