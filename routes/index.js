const express = require('express');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes')

const router = express.Router();


router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes)

module.exports = router;
