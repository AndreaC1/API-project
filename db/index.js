import mysql from "mysql2";
import config from "../config/index.js";


// console.log("MySQL Config:", config.mysql)

const connection = mysql.createPool(config.mysql);

export default connection;