const express = require('express');
const port = 3000;
let app = express();

app.get('/', (req, res) => {
    res.send('Hello, it\'s me');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});