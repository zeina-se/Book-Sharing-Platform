const mongoose = require("mongoose");

const likersSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const followersSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const booksSchema = new mongoose.Schema({
    name: String,
    author: String,
    picture: String,
    shortReview: String, // Changed "Text" to "String"
    likers: [likersSchema]
}, { timestamps: true });

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    books: [booksSchema],
    followers: [followersSchema]
}, {
    timestamps: true
});

const User = mongoose.model("User", usersSchema);
module.exports = User;