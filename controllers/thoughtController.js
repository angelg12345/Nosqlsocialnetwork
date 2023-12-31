const Thought = require('../models/Thought')
const Reaction = require('../models/Reaction')

const thoughtController = {
    getAllThoughts: async (req, res) => {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  
    getSingleThought: async (req, res) => {
      try {
        const thought = await Thought.findById(req.params.id).populate('reactions');
        res.json(thought);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  
    createThought: async (req, res) => {
      try {
        const thought = await Thought.create(req.body);
        res.json(thought);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    updateThought: async (req, res) => {
      try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(thought);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    deleteThought: async (req, res) => {
      try {
        await Thought.findByIdAndDelete(req.params.id);
        res.json({ message: 'Thought deleted successfully' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    createReaction: async (req, res) => {
      try {
        const reaction = await Reaction.create(req.body); // Create the reaction
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $push: { reactions: reaction._id } }, // Add the reaction ID to the thought
          { new: true }
        );
        res.json(reaction); // Send back just the created reaction
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
  
    deleteReaction: async (req, res) => {
      try {
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $pull: { reactions: { _id: req.body.reactionId } } },
          { new: true }
        );
        res.json(thought);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
    
  };
  
  module.exports = thoughtController;