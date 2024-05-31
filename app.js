const express = require('express');
const app = express();
const port = 3000;
// routes
const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

// server
app.get('/', (req, res) => {
  res.send('Server ok');
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});