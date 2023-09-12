const User = require('../models/User');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message})
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try{
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    updateUser: async(req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.json({ message: 'User deleted successfully' });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
    
      addFriend: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $push: { friends: req.params.friendId } },
            { new: true }
          );
          res.json(user);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
    
      removeFriend: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
          );
          res.json(user);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
};

module.exports = userController