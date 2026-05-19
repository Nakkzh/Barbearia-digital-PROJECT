const express = require('express')
const router = require('./MVC/Routes/config.js')
const sequelize = require('./DATABASE/dbconfig')

class Server
{
    app
    port

    constructor(port)
    {
        this.app = express()
        this.port = port

        sequelize.sync()

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use('/css', express.static('css'))
        this.app.use(router)

        this.app.set("view engine", "ejs")
        this.app.set("views", "./MVC/Views")
    }

    listen()
    {
        this.app.listen(this.port, () => {
            console.log("Servidor Online...")
        })
    }
}

module.exports = new Server(3000)