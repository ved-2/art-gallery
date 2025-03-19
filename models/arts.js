const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    artistId: String,
    title: String,
    artistName: String,
    description: String,
    price: Number,
    image: String,
    category: String 
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
