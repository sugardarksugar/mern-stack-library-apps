const express = require("express");
const mongoose = require('mongoose')
const { PORT, mongoDBURL } = require("./config.js");
const app = express()
const { Book } = require('./models/bookModel.js');
const booksRoute = require('./routes/booksRoute.js')
const cors = require('cors')


app.use(express.json());

// // Middleware for handling CORS POLICY
// // 1.Allow All Origins with Default of cors(*)
// app.use(cors())
// // 2.Custom Origins
app.use(cors({
    origin: 'http://localhost:4000/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowdHeaders: ['Content-Type'],
}))

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port:${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });


