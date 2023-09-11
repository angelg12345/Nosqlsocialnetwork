const mongoose = require('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost:27017/social_network_db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindandModify: false,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error connecting to mongodb:', error);
});

db.once('open', () => {
    console.log('Connected to mongoDB')
});

module.exports = connection; 

