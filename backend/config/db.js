const mongoose = require('mongoose');
const connect = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/productDB', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log("Connected to DB ");
    } catch (ex) {
        console.log("failed to connect to db", ex);
    }
}

module.exports = connect;