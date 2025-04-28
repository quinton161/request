// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Enable static file serving from the public directory
app.use(express.static('public'));

// API endpoint to get client info
app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.get('accept-language'),
    software: req.get('user-agent')
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