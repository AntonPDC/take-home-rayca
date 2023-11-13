# Rayca API

## Overview

Rayca API is a backend service designed for handling API calls related to user authentication and project management. It utilizes Node.js with Express for server-side development and MongoDB as the database through Mongoose.

## Installation

1. Clone the repository:

   git clone https://github.com/AntonPDC/take-home-rayca.git
   cd rayca-api

2. Install dependencies:

   npm install

## Configuration

1. Create a `.env` file in the root of the project with the following content:

   .env

   PASSWORD_SEC=your_password_secret
   JWT_SECRET_KEY=your_jwt_secret_key

   Replace `your_password_secret` and `your_jwt_secret_key` with your own secrets.

## Usage

### Start the API

nodemon index.js

### Development Mode

npm run dev

## API Endpoints

### Authentication

- **POST /api/auth/register**

  Creates a new user.

- **POST /api/auth/login**

  Logs in a user.

- **POST /api/auth/logout**

  Logs out a user.

### Projects

- **POST /api/project/**

  Creates a new project.

- **PUT /api/project/:id**

  Updates a project.

- **DELETE /api/project/:id**

  Deletes a project.

- **GET /api/project/find/:id**

  Retrieves a specific project.

- **GET /api/project/**

  Retrieves all projects.

### Users

- **PUT /api/user/:id**

  Updates a user.

- **DELETE /api/user/:id**

  Deletes a user.

- **GET /api/user/find/:id**

  Retrieves a specific user.

- **GET /api/user/**

  Retrieves all users.

## Dependencies

- bcrypt
- cors
- crypto-js
- dotenv
- encoding
- express
- jsonwebtoken
- mongodb
- mongoose
- nodemon (devDependencies)
- prop-types
