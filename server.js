const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (not found, this is a 
// catch-all route and goes after other get requests)
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection, goes at bottom
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});