const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default response for any other request (not found, this is a 
// catch-all route and goes after other get requests)
app.use((req, res) => {
    res.status(404).end();
});

// goes at bottom
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});