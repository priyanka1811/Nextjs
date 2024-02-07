import { Client, Pool } from "pg";

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "contact",
    password: "12345",
    port: "5432"
});

export default async function dbConnect() {
    await pool.connect((err, client, release) => {
        if (err) {
            return console.error("Error in connection", err.stack);
        }
        client.query("SELECT NOW()", (err, result) => {
            release()
            if (err) {
                return console.error("Error in Query")
            }
            console.log("Connected to DB", result.rows);
        })
    })
}