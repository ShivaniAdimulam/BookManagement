const {addBook,getBooksList,getBookDetailsById,updateBook,deleteBook  } = require('../service/bookService');


exports.addBook = async (req, res) => {
    try {
        const data = await addBook(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}

exports.getBooksList = async (req, res) => {
    try {
        const data = await getBooksList(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}



exports.getBookDetailsById = async (req, res) => {
    try {
        const data = await getBookDetailsById(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}


exports.updateBook = async (req, res) => {
    try {
        const data = await updateBook(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}


exports.deleteBook = async (req, res) => {
    try {
        const data = await deleteBook(req);
        res.status(200).json(data);
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
}

