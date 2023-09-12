const express = require('express');
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../controllers/thoughtController')

const router = express.Router();

router.route('/')
.get(getAllThoughts)
.post(createThought);

router.route('/:id')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;