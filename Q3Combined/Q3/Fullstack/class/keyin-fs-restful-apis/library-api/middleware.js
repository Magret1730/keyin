let books = [
    { id: 1, title: '1984', author: 'George Orwell', availableCopies: 3 },
    { id: 2, title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 5 },
    { id: 3, title: 'Fahrenheit 451', author: 'Ray Bradbury', availableCopies: 4 },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', availableCopies: 2 },
    { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 6 }
];

function validateBookId(request, response, next) {
    const userBookId = parseInt(request.params.id);
    if (isNaN(userBookId) || userBookId < 0) {
        return response.status(400).json({error: `Book ${userBookId} must be a number.`});
    }

    const userRequestBookIndex = books.findIndex((book) => book.id === userBookId);
    if (userRequestBookIndex < 0) {
        return response.status(404).json({error: `A book with id ${userBookId} was not found.`});
    }

    next();
}

function validateIncomingBookData(request, response, next) {
    const userData = request.body;
    const parsedCopies = parseInt(userData.availableCopies);

    if (!userData.author || !userData.title || isNaN(parsedCopies) || userData.availableCopies < 0) {
        response.status(400).json({error: "Books are required to have an author, a title and a positive number of copies available."});
        return;
    }

    next();
}

module.exports = {
    validateBookId,
    validateIncomingBookData
}