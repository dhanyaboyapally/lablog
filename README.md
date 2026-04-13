# LabLog - Mini MEAN Stack Application

LabLog is a full-stack MEAN (MongoDB, Express, Angular, Node.js) web application designed for simple laboratory experiment tracking and logging.

## Project Structure

This repository contains two main directories:
- `frontend`: An Angular 21 project for the user interface.
- `backend`: A Node.js and Express backend server that connects to a MongoDB database.

## Prerequisites

- Node.js installed
- Angular CLI installed globally (`npm install -g @angular/cli`)
- A MongoDB cluster or local instance running

## Getting Started

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update your MongoDB connection string in the configuration if required.
4. Start the backend server:
   ```bash
   npm start
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200` to view the application.

## Technologies Used

- **MongoDB / Mongoose**: Database and ODM
- **Express / Node.js**: Backend API framework
- **Angular**: Frontend framework
- **TypeScript**: Typed language for frontend and potentially backend

## License

This project is licensed under the MIT License.
