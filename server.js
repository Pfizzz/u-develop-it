const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password,
        password: 'Erebor@12',
        database: 'election'
    },
    console.log('Connected to the election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// Default response for any other request (not found, this is a 
// catch-all route and goes after other get requests)
app.use((req, res) => {
    res.status(404).end();
});

// goes at bottom
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});