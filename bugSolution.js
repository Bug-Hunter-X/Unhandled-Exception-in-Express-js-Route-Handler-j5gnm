const express = require('express');
const app = express();
const users = {
  '1': { name: 'John Doe' },
  '2': { name: 'Jane Smith' },
};
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Input validation: Check if userId is a valid number and exists in users
  if (!Number.isInteger(parseInt(userId)) || !users.hasOwnProperty(userId)) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ user: users[userId] });
});