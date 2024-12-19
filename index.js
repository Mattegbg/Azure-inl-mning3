const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (e.g., index.html)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log('Server is running on port ${port}')
});
