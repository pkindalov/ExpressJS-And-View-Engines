const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views', 'public/views');

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    res.render('test', {
                                        title: 'Title from backend',
                                        myArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                         });
});


// app.get('/', (req, res) => {
//     res.send('Hello, it\'s me');
// });

//Middleware
// app.get('/', (req, res, next) =>{
//     req.user = {username: 'Banana Joe'};
//     next();
// }, (req, res) => {
//     res.send(req.user.username);
//     res.end();
// });


// app.post('/user/login', (req, res) => {
//    console.log(req.body);
// });


// app.post('/post', (req, res) => {
//     res.send('It\`s posted.');
// });


// app.get(/.*fly$/, (req, res) => {
//     res.send('butterfly, dragonfly');
// });


// app.get('/category/:name', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.name);
//     res.send('Category name is ' + req.params.name);
//     res.end();
// });

// app.get('/users/:userId/books/:bookId', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.userId);
//     console.log(req.params.bookId);
//     res.send(`User Id: ${req.params.userId} Book id: ${req.params.bookId}`);
//     res.end();
// });


app.all('*', (req, res) => {
    res.send('Ooops 404');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});