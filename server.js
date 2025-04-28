const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Main API endpoint
app.get('/api/whoami', (req, res) => {
  try {
    const ipaddress = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
      ipaddress,
      language,
      software
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice is running. Try /api/whoami endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/whoami to test the API`);
}); 