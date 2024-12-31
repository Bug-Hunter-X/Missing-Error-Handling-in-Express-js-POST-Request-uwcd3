const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  console.log(user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server is running on port 3000'));