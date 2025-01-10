# KoinX Backend Internship Assignment

Welcome to my repository for the KoinX Backend Internship Assignment. This repository contains my solution to the backend tasks which involves building a server-side application using Node.js and MongoDB that interacts with the CoinGecko API to fetch cryptocurrency data and provide endpoints for querying it.

## Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Assignment Overview](#assignment-overview)
   - [Task 1](#task-1)
   - [Task 2](#task-2)
   - [Task 3](#task-3)
   - [Optional Tasks](#optional-tasks)
5. [API Documentation](#api-documentation)
6. [Usage](#usage)
7. [Contribution](#contribution)
8. [License](#license)

---

## Introduction

This project is my implementation of the KoinX Backend Internship Assignment. The goal was to build a server-side application using Node.js and MongoDB to interact with the CoinGecko API, fetch cryptocurrency data for Bitcoin, Matic, and Ethereum, and provide various API endpoints for accessing that data.

## Tech Stack

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for API routing
- **MongoDB**: NoSQL database for storing cryptocurrency data
- **CoinGecko API**: To fetch real-time cryptocurrency data
- **Axios**: For making HTTP requests to the CoinGecko API

## Installation

### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version recommended)
- npm (Node Package Manager)

### Steps

1. Clone this repository:

    ```bash
    git clone https://github.com/Aditya-a404a/crypto-api.git
    cd crypto-api
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    
    MONGO=your_mongo_connection_string
    ```

4. Start the server:

    ```bash
    node server.cjs
    ```

The server should now be running locally on port 3000.

## Assignment Overview

### Task 1: Background Job for Cryptocurrency Data

Implemented a background job that:
- Fetches data (price in USD, market cap in USD, and 24-hour change) for **Bitcoin**, **Matic**, and **Ethereum** every 2 hours.
- Stores the data in a MongoDB database.
- Uses the CoinGecko API to fetch data.

### Task 2: `/stats` API

Created an API endpoint `/stats` that:
- Accepts a query parameter `coin` (bitcoin, matic, or ethereum).
- Returns the latest data for the requested cryptocurrency.

### Task 3: `/deviation` API

Created an API endpoint `/deviation` that:
- Accepts a query parameter `coin`.
- Returns the standard deviation of the price of the requested cryptocurrency for the last 100 records stored in the database.

## Optional Tasks

1. **Database Deployment**: Deployed the MongoDB database using MongoDB Atlas.
2. **Backend Deployment**: Deployed the backend using Heroku (or specify other platforms you may have used).

## API Documentation

### `/stats`

**Method**: GET  
**Query Parameters**:
- `coin`: One of `bitcoin`, `matic`, or `ethereum`.

**Response**:

    ```json
    {
      "price": 40000,
      "marketCap": 800000000,
      "24hChange": 3.4
    }
    ```

### `/deviation`

**Method**: GET  
**Query Parameters**:
- `coin`: One of `bitcoin`, `matic`, or `ethereum`.

**Response**:

    ```json
    {
      "deviation": 4082.48
    }
    ```

## Usage

- To run the server locally, execute `npm run dev ` after installation.
- Make sure the background job is running to fetch data every 2 hours. ( deviation will be correct only after 200 hours as gone past)
- Use the `/stats` and `/deviation` API endpoints to fetch data.

## Contribution

Feel free to provide feedback or suggestions for improvement. All contributions are welcome!
