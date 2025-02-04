const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  console.log(users[userId]); // Accessing users array directly without validation
  res.json({ user: users[userId] });
});