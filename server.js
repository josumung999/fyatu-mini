const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Initialize cross origin
app.use(cors());

// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/cards', require('./routes/api/cards'));


app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));