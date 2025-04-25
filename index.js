// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable static file serving from the public directory
app.use(express.static('public'));

// API endpoint to get client info
app.get('/api/whoami', (req, res) => {
  // Get IP address (using x-forwarded-for header if available for proxied requests)
  const ipAddress = req.headers['x-forwarded-for'] || 
                    req.connection.remoteAddress;
  
  // Get preferred language from Accept-Language header
  const language = req.headers['accept-language'];
  
  // Get software info from User-Agent header
  const software = req.headers['user-agent'];
  
  // Return JSON response with the requested information
  res.json({
    ipaddress: ipAddress,
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