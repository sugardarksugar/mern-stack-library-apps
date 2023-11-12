const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
});

// Use the `bookSchema` to define the `Book` model
const BookModel = mongoose.model('Book', bookSchema);

// Export the `Book` model
module.exports = BookModel;