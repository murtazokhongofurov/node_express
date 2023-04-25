const mongoose = require('mongoose');

const connDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        })
        console.log(`Mongodb connected to: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connDb;