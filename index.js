import express from 'express'
import dotenv from 'dotenv'
import { Connection } from './db.js'
import Admin from './models/Admin.js'


const app = express()
dotenv.config()


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})