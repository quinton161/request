# Request Header Parser Microservice

This is a simple microservice that parses and returns information from HTTP request headers. The service provides details about the client's IP address, preferred language, and browser information.

## Live Demo

You can test the app locally at: http://localhost:3001/

## API Endpoint

- **GET /api/whoami**: Returns a JSON object containing:
  - `ipaddress`: The client's IP address
  - `language`: The client's preferred language
  - `software`: Information about the client's browser and operating system

### Example Response

```json
{
  "ipaddress": "192.168.1.1",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
}
```

## Running the App Locally

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Visit `http://localhost:3001` in your browser

## Technologies Used

- Node.js
- Express.js
- HTML/CSS 