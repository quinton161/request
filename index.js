// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Trust proxy setup for correct IP address detection
app.set('trust proxy', true);

// Enable static file serving from the public directory
app.use(express.static('public'));

// API endpoint to get client info
app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Root route - serve HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Request Header Parser Microservice listening on port ${port}`);
}); 