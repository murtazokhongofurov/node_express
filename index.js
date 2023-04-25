const express = require('express');
const connDb = require('./config/db');
require('dotenv').config()

// Connect to database
connDb();

const PORT = process.PORT || 8000

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", require('./routes/userRoutes'))

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));

