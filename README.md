# Transactions API

This project is a simple API built with Node.js, TypeScript, Express, and Mongoose to manage transactions. It allows users to fetch, create, and delete transactions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Run the Server](#run-the-server)
  - [API Endpoints](#api-endpoints)


## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/transactions-api.git

2. Navigate to project directory:
  cd transactions-api


3. Run npm install




  ##PROJECT STRUCTURE 

  transactions-api/
├── config/
│   └── env.ts        # Environment configuration file
├── dist/              # Compiled TypeScript files (generated after running npm run build)
├── models/            # Mongoose models
│   └── Transaction.ts # Transaction model definition
├── routes/            # Express route handlers
│   └── transactionRoutes.ts # Transaction routes definition
├── src/               # Source code files
│   ├── config/
│   │   └── env.ts    # Environment configuration file (TypeScript)
│   ├── models/
│   │   └── Transaction.ts # Transaction model definition (TypeScript)
│   ├── routes/
│   │   └── transactionRoutes.ts # Transaction routes definition (TypeScript)
│   ├── app.ts         # Main application file
│   └── server.ts      # Express server setup
├── .env               # Environment variable file (not committed to version control)
├── .gitignore         # Git ignore file
├── package.json       # NPM package configuration file
├── tsconfig.json      # TypeScript configuration file
└── README.md          # Project documentation




## Configuration
Configure the application by modifying the files in the config/ directory. Set up environment variables for sensitive information like database connection strings. If you're using MongoDB Atlas, you might have a .env file with the following content:


MONGODB_URI=mongodb+srv://your-username:your-password@cluster-name.mongodb.



## Usage
Run the Server
npm run start


## API ENDPOINTS
Create Transaction:

POST /api/create
Delete Transaction:

DELETE /api/delete/:email
Fetch Transactions:

GET /api/transactions/:email

