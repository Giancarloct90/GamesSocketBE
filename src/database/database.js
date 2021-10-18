import config from "../config";
(async () => {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect(config.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Data Connected');
    } catch (e) {
        console.log('Error to Connect DB');
        console.log(e);
    }
})();