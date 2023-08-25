const User = require("../models/users.model.js")

// const addBook2 = async (req, res) => {
//   const { name, author, shortReview } = req.body;
//   const userId = req.user._id;
//   const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }
//     return res.status(404).send({ message: 'User found' });

// }

const addBook = async (req, res) => {
  const { name, author, shortReview } = req.body;
  try {
    // Get the auth id
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

   
    // Get the uploaded picture from req.files
    const picture = req.picture;

    // Generate a unique filename for the uploaded picture
    const uniqueFilename = `${Date.now()}-${picture.name}`;

    // Specify the directory to save the uploaded picture
    const uploadDirectory = '../uploads';

    // Save the picture to the uploads directory
    picture.mv(`${uploadDirectory}/${uniqueFilename}`);

    // Create the book object
    const book = {
      name,
      author,
      picture: uniqueFilename,
      shortReview
    };

    // Add the book to the user's books
    user.books.push(book);

    // Save the user with the updated books array
    await user.save();

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
};


   const searchBooks = async (req, res) => {
     const keyword = req.query.keyword;
   
     try {
       const users = await User.find({
         'books.name': { $regex: keyword, $options: 'i' }
       });
   
       res.send(users);
     } catch (error) {
       console.error(error);
       res.status(500).send({ message: 'Internal server error' });
     }
   };
   
  const getBooks = async(req, res) => {
    const {id} = req.params
  
    const books = [];
    const users = await User.find();
    users.forEach(user=>{
         books.push(...user.books)
    })

    if(!id) return res.send(books)

    const book = books.find(book=> book._id === id)
    return res.send(book)
}

const getMyBooks = async (req, res)=> {
    const user = await User.findById(req.user._id);

    res.send(user.books)
}

   module.exports = {
    addBook,searchBooks,getBooks,getMyBooks
   };
  
   