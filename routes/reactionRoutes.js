const express = require('express');
const {
    createReaction,
    deleteReaction
} = require('../controllers')

const router = express.Router();

router.route('/')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;