const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },function(err) {
        if(err) {
            throw err;
        } else {
            console.log('Connected to DB');
        }
    });
}

module.exports = connectDB;