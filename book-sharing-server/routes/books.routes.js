const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/add", authMiddleware, booksController.addBook2);
router.post("/search", authMiddleware, booksController.searchBooks);

// router.get("/:id?", booksController.getbooks)
// router.get("/me", authMiddleware, booksController.getMybooks)

module.exports = router;