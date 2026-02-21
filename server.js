const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// Frontend show karne ke liye
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Save API
app.post('/api/save', (req, res) => {
    console.log("Resume Data Received:", req.body);
    res.json({ status: "Success", message: "Data saved!" });
});

app.listen(5000, () => {
    console.log("========================================");
    console.log("SERVER RUNNING: http://localhost:5000");
    console.log("========================================");
});