const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// SQLite setup
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Database opening error:', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Example route
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
