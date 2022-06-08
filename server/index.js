require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const cityRoutes = require('./routes/city')
const cors = require('cors')

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(cityRoutes)



async function start() {
    try {
        await mongoose.connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        );

        console.log('Connection created')

        app.listen(PORT, () => {
            console.log(`Server has been started on port = ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

start()


