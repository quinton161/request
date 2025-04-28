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
  // Get the client's IP address
  const ipaddress = req.ip || 
                    req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;

  // Get the preferred language from the Accept-Language header
  const language = req.headers['accept-language'];

  // Get the client software from the User-Agent header
  const software = req.headers['user-agent'];

  // Send the response
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
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