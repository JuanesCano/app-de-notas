import mongoose from 'mongoose';

const uri = 'mongodb+srv://juan:juan@juan.b7utveg.mongodb.net/socketNote';

mongoose.set("strictQuery", false)

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri);
        console.log('base de datos conectada', db.connection.name);
    }
    catch (error) { console.log('error al conectar con la base de datos', error.message); }
}