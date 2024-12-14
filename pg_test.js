import { pgPool } from "./pg_connection.js";

makeQuery();

async function makeQuery(){
    try {
        await pgPool.query("INSERT INTO users (userid, username, email, password) VALUES (1, 'JackBlack', 'jackblack@gmail.com', 'jack123')")
    } catch (error) {
        console.log(error.message);
    }
}