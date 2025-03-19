const mongoose=require('mongoose');
const Art = require('../models/arts.js');
const initData = require('./data.js');

const MONGO_URL ="mongodb://127.0.0.1:27017/digital_art_gallery";

main()
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err)
    });


async function main(){
    await mongoose.connect(MONGO_URL); 
}

const initDB = async() =>{
    await Art.deleteMany({});
    await Art.insertMany(initData.data);
    console.log("Data inserted");
}

initDB();