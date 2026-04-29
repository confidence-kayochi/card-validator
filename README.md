# Card Validator API

A simple Node.js + Express + TypeScript API that validates credit/debit card number using the Luhn algorithm. The API exposes a single endpoint that checks whether a card number is structurally valid.

---

## Features

- Card number validation using the Luhn algorithm
- Global error handling middleware (consistent JSON errors)
- TypeScript-based Express setup
- Clean modular architecture (controllers, services, utils)
- Input validation and structured API responses

## Tech Stack

- Node.js
- Express.js
- TypeScript
- ts-node (development runtime)
- nodemon (hot reload)

## Installation

``bash
git clone <repo-url>
cd card-validator
npm install

---

## Running the project (development)

npm run dev

- Server runs on http://localhost:5000

## Build (production)

``bash
npm run build

- Run compiled output

npm run start:prod

---

## API Endpoint

- Validate card number
  POST /api/v1/validate-card
- Request Body
  ``JSON {
  "cardNumber": '4539148803436467"
  }
- Response (valid card)
  ``JSON {
  "status": "success",
  "valid": "true"
  }
- Response (invalid card)
  ``JSON {
  "status": "fail",
  "message": "invalid card number",
  }

---

## Error Handling

All errors are handled through a global error handling middleware and returned in JSON format
``JSON {
"status": "error",
"message": "Error description"
}

## Environment Variables

Currently no external environment variables are required.

- Optional future additions
  PORT=5000
  NODE_ENV=development

---

## Notes

This project does not use a database
It is stateess and purely computational
