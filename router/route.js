const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth.js")

const { addBook,getBooksList,getBookDetailsById,updateBook,deleteBook } = require("../controller/bookController");
const {addAdmin,login,logout} = require("../controller/adminController")

//******************************************Admin Apis******************************************************************* 
router.post('/admin/addAdmin',addAdmin);
router.post('/admin/login',login);
router.put('/admin/logout',auth,logout);

//******************************************Book Apis********************************************************************
router.post('/book/addBook',auth,addBook);
router.get('/book/getBooksList',auth,getBooksList);
router.get('/book/getBookDetailsByID',auth,getBookDetailsById);
router.put('/book/updateBook',auth,updateBook);
router.put('/book/deleteBook',auth,deleteBook)


module.exports = router