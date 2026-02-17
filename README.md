# Profile Page

A modern, responsive portfolio website with an integrated contact form mailer system.

## Project Structure

```
profile-page/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # Entry point with MUI theme
│   │   └── index.css      # Global styles
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── vite.config.ts
│   └── package.json
├── server/                # Express.js backend
│   ├── src/
│   │   ├── index.ts       # API server
│   │   └── emailTemplate.ts  # Email template generator
│   ├── Dockerfile
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env               # Environment variables (local)
│   └── .env.example       # Template env file
├── docker-compose.yml     # Docker Compose configuration
└── README.md             # This file
```

## Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Responsive design with custom theme

**Backend:**
- Node.js
- Express.js
- TypeScript
- Mailtrap for email delivery

**Deployment:**
- Docker & Docker Compose
- Nginx (client reverse proxy)

## Setup

### Prerequisites

- Node.js 20+
- Docker & Docker Compose (optional, for containerized setup)
- Mailtrap account (for email functionality)

### Local Development

#### 1. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

#### 2. Configure Environment

Create a `.env` file in the `server/` directory:

```bash
cp server/.env.example server/.env
```

Fill in your Mailtrap credentials:
```
PORT=4000
MAILTRAP_TOKEN=your_mailtrap_api_token
MAILTRAP_FROM=hello@demomailtrap.co
MAILTRAP_TO=your_email@example.com
```

**Getting Mailtrap credentials:**
1. Sign up at [mailtrap.io](https://mailtrap.io)
2. Create an inbox
3. Navigate to **Integrations** → **Nodemailer**
4. Copy the token and use it in your `.env`

#### 3. Run Development Servers

**Server (from `server/` directory):**
```bash
npm run dev
```
Server runs on `http://localhost:4000`

**Client (from `client/` directory):**
```bash
npm run dev
```
Client runs on `http://localhost:5173`

### Docker Deployment

Build and run with Docker Compose:

```bash
docker-compose up --build
```

- Client accessible at `http://localhost:8080`
- Server accessible at `http://localhost:4000`

## API Endpoints

### `/api/health`
**GET** - Health check
```bash
curl http://localhost:4000/api/health
# Response: { "status": "ok" }
```

### `/api/contact`
**POST** - Submit contact form
```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to work with you!"
  }'
# Response: { "success": true }
```

**Fields:**
- `name` (string, required) - Sender's name
- `email` (string, required) - Sender's email address
- `message` (string, required) - Contact message

**Response:**
- `200 OK`: `{ "success": true }`
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Mailer configuration issue or send failure

## Email Template

Emails are sent with:
- **Format**: HTML + plain text
- **Design**: Matches client theme (teal #0f766e, amber #f59e0b)
- **Content**: Sender info, message, request metadata (IP, timestamp, user agent)
- **Client Compatibility**: Inline styles for broad email client support

## Scripts

**Server:**
```bash
npm run dev      # Start dev server with hot reload
npm run build    # Compile TypeScript
npm start        # Run compiled server
```

**Client:**
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code
```

## Theme & Styling

Client uses a custom Material-UI theme with:
- **Primary:** Teal (#0f766e)
- **Secondary:** Amber (#f59e0b)
- **Typography:** IBM Plex Sans, Space Grotesk
- **Background:** Radial gradient (light theme)
- **Border radius:** 16px
- **Custom components:** Cards, buttons, inputs

Email templates automatically use the same color palette for consistency.

## Environment Variables

**Server `.env`:**
```
PORT                 # Server port (default: 4000)
MAILTRAP_TOKEN      # Mailtrap API token
MAILTRAP_FROM       # Sender email address
MAILTRAP_TO         # Recipient email address
```

## Troubleshooting

**Email not sending?**
- Check Mailtrap credentials in `.env`
- Verify token hasn't expired on Mailtrap dashboard
- Check server logs for detailed error messages

**CORS errors?**
- Ensure `VITE_API_URL` environment variable is set correctly
- Server CORS is configured to allow all origins by default

**Build errors?**
- Run `npm install` in both `server/` and `client/`
- Clear node_modules and reinstall if issues persist
- Check TypeScript version compatibility

## Production Checklist

- [ ] Set strong `MAILTRAP_TOKEN` in production environment
- [ ] Update `MAILTRAP_TO` to production email address
- [ ] Set `VITE_API_URL` to production API domain
- [ ] Enable HTTPS on production
- [ ] Set up environment variables securely (secrets manager)
- [ ] Test contact form end-to-end
- [ ] Monitor email delivery in Mailtrap dashboard

## License

MIT