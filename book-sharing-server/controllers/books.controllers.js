const User = require("../models/users.model.js")

const addBook2 = async (req, res) => {
  const { name, author, shortReview } = req.body;
  const userId = req.user._id;
  const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(404).send({ message: 'User found' });

}

// const addBook = async (req, res) => {
//   const { name, author, shortReview,picture } = req.body;
//   try {
//     // Get the auth id
//     const userId = req.user._id;
// console.log(req);
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send({ message: 'User not found' });
//     }

//     if (!req.files || !req.files.picture) {
//       return res.status(400).send({ message: 'No picture found in the request' });
//     }

//     // Get the uploaded picture from req.files
//     const picture = req.files.picture;

//     // Generate a unique filename for the uploaded picture
//     const uniqueFilename = `${Date.now()}-${picture.name}`;

//     // Specify the directory to save the uploaded picture
//     const uploadDirectory = '../uploads';

//     // Save the picture to the uploads directory
//     picture.mv(`${uploadDirectory}/${uniqueFilename}`);

//     // Create the book object
//     const book = {
//       name,
//       author,
//       picture: uniqueFilename,
//     };

//     // Add the book to the user's books
//     user.books.push(book);

//     // Save the user with the updated books array
//     await user.save();

//     res.send(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal server error' });
//   }
// };


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
   
   module.exports = {
     searchBooks,
   };

   module.exports = {
    addBook2,searchBooks
   };
// const getStays = async(req, res) => {
//      const {id} = req.params
   
//      const stays = [];
//      const users = await User.find();
//      users.forEach(user=>{
//           stays.push(...user.stays)
//      })

//      if(!id) return res.send(stays)

//      const stay = stays.find(stay=> stay._id === id)
//      return res.send(stay)
// }

// const getMyStays = async (req, res)=> {
//      const user = await User.findById(req.user._id);

//      res.send(user.stays)
// }

  
  
// module.exports = {addBook,getMyStays, getStays}