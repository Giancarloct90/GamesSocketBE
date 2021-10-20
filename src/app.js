import cors from "cors";
import morgan from "morgan";
import router from "./routes/games.routes";
import path from 'path';
import multer from 'multer';

// CREATE SOCKET-IO SERVER
import express from "express";
import http from "http";
const app = express();
const server = http.Server(app);
export const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

// CONFIG SETTING SERVER
const portSer = 3000;
app.use(cors());
app.use(morgan("short"));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//MIDDELWARE 
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public'),
    filename: (req, file, fnCallback) => {
        fnCallback(null, `${new Date().getTime() + path.extname(file.originalname)}`)
    }
})
app.use(multer({
    storage
}).single('image'));

// ROUTES
app.use('/API', router);

// SERVER ON
server.listen(portSer, err => err ? console.log("Error to turn on Server") : console.log("Server on port", portSer));
// server.listen(3000, err => {
//     if (err) {
//         console.log("Error", e);
//     } else {
//         console.log('Server On');
//     }
// })