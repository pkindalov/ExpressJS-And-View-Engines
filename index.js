const express = require('express');
const port = 3000;
let app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('Hello, it\'s me');
});

app.post('/post', (req, res) => {
    res.send('It\`s posted.');
});


app.get(/.*fly$/, (req, res) => {
    res.send('butterfly, dragonfly');
});


app.get('/category/:name', (req, res) => {
    console.log(req.params);
    console.log(req.params.name);
    res.send('Category name is ' + req.params.name);
    res.end();
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    console.log(req.params.userId);
    console.log(req.params.bookId);
    res.send(`User Id: ${req.params.userId} Book id: ${req.params.bookId}`);
    res.end();
});


app.all('*', (req, res) => {
    res.send('Ooops 404');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});