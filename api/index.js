require('dotenv').config();
const express = require('express');
const cors = require('cors');
const os = require('os');

// Make a HTTP server, enable CORS middleware
const app = express();
app.use(cors());

// Add a couple of routes
app.get('/', (req, res) => {
  res.send('This is the API');
});

app.get('/serverInfo', (req, res) => {
  res.send(`API is running on architecture ${os.arch()}, hostname ${os.hostname()}, uptime ${os.uptime()} seconds`);
});

// Start listening
app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`API server listening on port ${process.env.EXPRESS_PORT}`);
});
