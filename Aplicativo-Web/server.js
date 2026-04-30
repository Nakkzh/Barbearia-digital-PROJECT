const express = require('express')
const router = require('./MVC/Routes/config')

class Server
{
    app 
    port

    constructor(port)
    {
        this.app = express()
        this.port = port
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