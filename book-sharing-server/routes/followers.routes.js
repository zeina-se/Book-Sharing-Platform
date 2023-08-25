const express = require("express");
const router = express.Router();
const followersController = require("../controllers/followers.controllers");
const authMiddleware = require("../middlewares/auth.middleware");



router.post("/:userId/follow/:followerId", authMiddleware, followersController.addFollower);
router.post("/:userId/unfollow/:followerId", authMiddleware, followersController.removeFollower);

// router.get("/:id?", booksController.getbooks)
// router.get("/me", authMiddleware, booksController.getMybooks)

module.exports = router;