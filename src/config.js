import {
    config
} from "dotenv";
config();

export default {
    port: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI,
}