const express = require("express");
const mongoose = require('mongoose')
const { PORT, mongoDBURL } = require("./config.js");
const app = express()
const { Book } = require('./models/bookModel.js');


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Turtorial')
});

// app.listen(PORT, () => {
//     console.log(`App is listening to port:${PORT}`);
// })

app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        return response.status(201).send(book);
        response.status(200).send({ message: 'Book created successfully.', newBook });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
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



