const User = require("../models/users.model.js")


const addFollower = async (req, res) => {
    try {
        const { userId , followerId } = req.params;

        // Find the user to add the follower
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add the follower to the user's followers array
        user.followers.push(followerId);
        await user.save();

        res.status(200).json({ message: "Follower added successfully" });
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        } 
};

const removeFollower = async (req, res) => {
    try {
    const { userId , followerId } = req.params;
  
      // Find the user to remove the follower from
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
          
      user.followers.pull(followerId);

      await user.save();
  
      res.status(200).json({ message: "Follower removed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

  module.exports = {
    addFollower,removeFollower
   };