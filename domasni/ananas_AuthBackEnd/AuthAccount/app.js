const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '10kb' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const corsOption = {
  origin: ['http://localhost:5173'],
};
app.use(cors(corsOption));

const userRouter = require('./routes/userRoutes');

app.use('/api/user', userRouter);

module.exports = app;
