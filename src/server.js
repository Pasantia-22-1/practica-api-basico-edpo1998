const express = require('express');
const cors = require('cors');
const router = require('./routes/task.route.js')
class Server{

    constructor(port){
        this.port = port;
        this.api = express();
        this.initRoute()
    }

    initServer(){
        this.api.listen(this.port,()=>{
            console.log(`Server Listening on port ${this.port}`)
        });
    }

    initRoute(){
        this.api.use("/api/v1",router);
    }
}

 module.exports = Server
