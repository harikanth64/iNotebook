const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 3001


// To send body content we reed Middleware
app.use(express.json())

// Available Routs
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
})
