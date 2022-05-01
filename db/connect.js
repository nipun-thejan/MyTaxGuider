// env setup
import dotenv from 'dotenv'
dotenv.config()

// get the client
import mysql from 'mysql2'

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
})

export default pool.promise()