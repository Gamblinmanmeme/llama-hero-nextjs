# GM Buyback Information Site

This is an informational website about GM Buybacks, featuring a stylized llama hero design.

## Features

- Responsive design with Tailwind CSS
- Stylized llama hero component
- Contact form
- Information sections
- Firebase integration for authentication and data storage
- AI integration with OpenAI, Anthropic, Replicate, and Deepgram

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at http://localhost:3000 (or another port if 3000 is in use).

### Environment Variables

Copy the `.env.example` file to `.env.local` and fill in the required environment variables:

```bash
cp .env.example .env.local
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Set up the required environment variables
4. Deploy!

### Manual Deployment

You can also deploy the app manually:

```bash
# Build the app
npm run build

# Start the production server
npm start
```

## Technologies Used

- React with Next.js 14 App Router
- TailwindCSS
- Firebase Auth, Storage, and Database
- Multiple AI endpoints including OpenAI, Anthropic, and Replicate using Vercel's AI SDK