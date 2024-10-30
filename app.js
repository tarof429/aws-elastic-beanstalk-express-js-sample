const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => res.send('Hello this is a Javascript project!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
