const mongoose = require('mongoose');
const initData = require("./data");
const listing = require("../models/listing");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
.then(() => {
    console.log("connected!");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async() => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);

    console.log("data initialised!");
    
};

initDB();
