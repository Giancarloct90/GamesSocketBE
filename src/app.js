import cors from "cors";
import morgan from "morgan";
import router from "./routes/games.routes";

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