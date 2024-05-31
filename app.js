const express = require('express');
const app = express();
const port = 3000;
// middlewares
const {notFoundError} = require('./middlewares/notFoundError404.js');
const {internalServerError} = require('./middlewares/internalServerError500.js');


// routes
const eventsRouter = require('./routers/events');
app.use('/events', eventsRouter);
app.use(express.json());

// server
app.get('/', (req, res) => {
  res.send('Server ok');
});

app.use(notFoundError);
app.use(internalServerError);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});