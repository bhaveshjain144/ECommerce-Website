import mongoose from 'mongoose';

// const Connection = async (username, password) => {
//     const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
const Connection = async () => {
    const URL = process.env.URI
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;