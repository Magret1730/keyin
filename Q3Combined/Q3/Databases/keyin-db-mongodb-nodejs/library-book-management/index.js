const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/keyinClassLibraryDB';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
});

const BookModel = mongoose.model('Book', bookSchema);

app.use(express.json());

// let books = [
//     { id: 1, title: 'Sample Book 1', author: 'Author A' },
//     { id: 2, title: 'Sample Book 2', author: 'Author B' }
// ];

app.get('/books', async (request, response) => {
    // response.json(books);
    try {
        const databaseBooks = await BookModel.find();
        response.json(databaseBooks);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .json({ message: "Server error"});
    }
});

app.post('/books', async (request, response) => {
    // const { title, author } = request.body;

    // const newBook = {
    //     id: books.length + 1,
    //     title,
    //     author
    // };
    // books.push(newBook);
    // response.status(201).json(newBook);

    const { title, author } = request.body;
    // Input validation important

    try {
        const newBook = new BookModel({
            title: title,
            author: author
        });
        await newBook.save();

        response.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .json({ message: "Server error"});
    }
});

// Not done for DB. Did it myself
app.put('/books/:id', async (req, res) => {
    // const { id } = req.params;
    // const { title, author } = req.body;
    // const bookIndex = books.findIndex(book => book.id === parseInt(id));

    // if (bookIndex === -1) {
    //     return res.status(404).send('Book not found');
    // }

    // books[bookIndex] = { ...books[bookIndex], title, author };
    // res.json(books[bookIndex]);

    const { id } = req.params;

    try {
        const bookToBeUpdated = await BookModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!bookToBeUpdated) {
            return res
                .status(404)
                .json({ error: `No book exists with id: ${id}`});
        }
        res
            .status(200)
            .json(bookToBeUpdated);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "Server error in update"});
    }
});

app.get('/books/:id', async (req, res) => {
    // const { id } = req.params;
    // const book = books.find(book => book.id === parseInt(id));

    // if (!book) {
    //     return res.status(404).send('Book not found');
    // }

    // res.json(book);

    const { id } = req.params;
    
    try {
        const book = await BookModel.findOne({ _id: id });
        if (!book) {
            return res
                .status(404)
                .json({ error: `No book exists with id: ${id}`});
        }
        res
            .status(200)
            .json(book);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "Server error in get by id"});
    }
});

app.delete('/books/:id', async (request, response) => {
    // const { id } = request.params;
    // const bookIndex = books.findIndex(book => book.id === parseInt(id));

    // if (bookIndex === -1) {
    //     return response.status(404).send('Book not found');
    // }

    // books.splice(bookIndex, 1);
    // response.status(204);
    // response.status(200).json({ message: 'Book deleted successfully' });

    const { id } = request.params;

    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        if (!deletedBook) {
            return response
                .status(404)
                .json({ error: `No book exists with id: ${id}`});
        }

        response
            .status(200)
            .json({ message: 'Book deleted successfully', deletedBook });
    } catch (error) {
        console.error(error);
        return response
            .status(500)
            .json({ message: "Server error in delete" });
    }
});

mongoose.connect(MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)))
    .catch((error) => console.error("Error occurred while starting the server:", error));

