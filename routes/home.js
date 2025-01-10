const express = require('express');
const router = express.Router();
router.get('/',(req, res) => {
    res.send(`
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f9;
          }
          h1 {
            color: #333;
          }
          p {
            font-size: 1.2em;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            background-color: #e8e8e8;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          strong {
            display: block;
            font-size: 1.1em;
            margin-bottom: 5px;
          }
          code {
            display: block;
            background-color: #272822;
            color: #f8f8f2;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', Courier, monospace;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Cryptocurrency API</h1>
        <p>Available Routes:</p>
        <ul>
          <li>
            <strong>/stats</strong> - GET
            <code>Query Params: coin (e.g., bitcoin, matic-network, ethereum)</code>
            Returns the latest data about the requested cryptocurrency.
          </li>
          <li>
            <strong>/deviation</strong> - GET
            <code>Query Params: coin (e.g., bitcoin, matic-network, ethereum)</code>
            Returns the standard deviation of the price of the requested cryptocurrency for the last 100 records.
          </li>
        </ul>
      </body>
      </html>
    `);
  }); 
module.exports = router;