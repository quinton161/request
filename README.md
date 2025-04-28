# Request Header Parser Microservice

This is a simple Node.js microservice that parses request headers and returns information about the client making the request.

## Functionality

The application provides an API endpoint that returns the following information:

- IP address of the client
- Language preference of the client
- Software information (browser and operating system)

## Demo

You can access the live demo at: [your-deployed-app-url]

## API Endpoint

### GET /api/whoami

Returns a JSON object with the following structure:

```json
{
  "ipaddress": "192.168.1.1",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
```

## Installation and Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/request-header-parser-microservice.git
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the server
   ```
   npm start
   ```

4. The application will be available at `http://localhost:3000`

## Development Mode

To run the application in development mode with automatic reloading:
```
npm run dev
```

## Technologies Used

- Node.js
- Express.js
- CORS for cross-origin requests
- dotenv for environment variable management

## Project Requirements

This project is based on the freeCodeCamp Request Header Parser Microservice challenge, meeting the following requirements:

1. A request to `/api/whoami` returns a JSON object with the client's IP address in the `ipaddress` key.
2. A request to `/api/whoami` returns a JSON object with the client's preferred language in the `language` key.
3. A request to `/api/whoami` returns a JSON object with the client's software information in the `software` key.

## License

MIT 