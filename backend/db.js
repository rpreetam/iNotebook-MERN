require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MURL
const connectToMongo = () => {
    mongoose.connect(mongoURI);
}
module.exports = connectToMongo;