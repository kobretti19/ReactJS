const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();
const PORT = 8004;

app.use(express.json());

app.listen(PORT, () => console.log(`Server is runing on PORT: ${PORT}`));
