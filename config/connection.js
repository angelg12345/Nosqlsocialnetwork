const mongoose = require('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_db';

mongoose.connect(connectionString, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    useFindandModify: false,
});

module.exports = connection; 

