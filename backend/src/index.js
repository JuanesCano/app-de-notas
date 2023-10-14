import express from 'express';
import { connectDB } from './database.js';
import { socket } from './socket/noteSocket.js';

connectDB()

const app = express();
app.set('port', 5000);

const server = app.listen(app.get('port'), () => {console.log('servidor escuchando por el puerto', app.get('port'));});

socket(server);