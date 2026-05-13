# Chat With PDF

A Next.js app for uploading PDFs, generating document embeddings, and asking questions against uploaded content.

This project is a practical experiment in document Q&A: users can upload PDFs, store them in Firebase, generate embeddings with OpenAI/LangChain/Pinecone, and interact with the documents through a chat-style interface.

## Features

- PDF upload and storage
- Authenticated user flows with Clerk
- Document parsing and embedding generation
- Question answering over uploaded PDF content
- Dashboard for managing uploaded documents
- Stripe checkout/customer portal flow for SaaS-style billing experiments

## Tech stack

- **Framework:** Next.js 14, React, TypeScript
- **Auth:** Clerk
- **Storage / data:** Firebase, Firebase Admin
- **AI / retrieval:** OpenAI, LangChain, Pinecone
- **Payments:** Stripe
- **UI:** Tailwind CSS, Radix UI, Lucide React

## Project structure

```text
.
├── actions/          # Server actions for Q&A, embeddings, Stripe, document management
├── app/              # Next.js app routes and pages
├── components/       # Shared UI components
├── hooks/            # React hooks
├── lib/              # Shared utilities
├── firebaseAdmin.ts  # Firebase Admin setup
└── middleware.ts     # Clerk middleware
```

## Getting started

### Prerequisites

- Node.js 20+
- npm
- Clerk project
- Firebase project/storage bucket
- OpenAI API key
- Pinecone API key/index
- Stripe account/API keys, if using payment flows

### Setup

```bash
git clone https://github.com/jlamour4/chat-with-pdf.git
cd chat-with-pdf
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your own service credentials.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

See [`.env.example`](./.env.example) for the expected variable names.

The example file intentionally uses placeholders only. Do not commit real API keys, Firebase credentials, Stripe secrets, or Clerk secrets.

## Available scripts

```bash
npm run dev      # Start local development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linting
```

## Notes

This was originally inspired by an online coding challenge/tutorial and then expanded with additional services and product-style features. It is best treated as a portfolio project and learning sandbox rather than a polished production SaaS.
