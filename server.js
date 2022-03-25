const express = require('express');
const app = express();
const db = require('./db');


app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Server working 🔥" + port)
});

const port = process.env.PORT || 8000;
app.listen(port, () => `listening on http://localhost:${port}`);
