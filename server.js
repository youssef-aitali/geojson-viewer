const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3500;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {res.send('It is working!');});
app.post('/parsedata', (req, res) => {
    fs.readFile(req.body.fileUrl, (err, data) => {
        if(err) {
            console.log("errorrrrr");
        }
        res.json(data);
    })
});

app.listen(port, () => console.log(`Web service running on port ${port}`));