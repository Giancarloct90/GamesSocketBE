import {
    io
} from "../app";

io.on('connection', (client) => {
    console.log('Se conecto un cliente: ', client.id);
});