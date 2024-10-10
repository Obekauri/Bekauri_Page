import React from 'react';
import ReactDOMServer from 'react-dom/server';
//import Profile from './frontend/components/profile';


const express = require('express');
const router = express.Router(); // Create a router
console.log('APP JS')

router.get('/about', (req, res) => {

  try {
    res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>My App</title>
            </head>
            <body>
                <div id="root">'as'</div>
            </body>
        </html>`);
  } catch (error) {
      console.error('Error rendering Profile component:', error);
      res.status(500).send('An error occurred while rendering the component.');
  }
});

// Define a route that displays content when accessed
router.get('/', (req, res) => {
  res.send(`<h2>This is the about page from app.js!</h2>`);
});

// Define other routes or middleware as needed
router.get('/contact', (req, res) => {
  res.send(`<h2>Contact us at contact@example.com</h2>`);
});

module.exports = router; // Export the router to use it in server.js