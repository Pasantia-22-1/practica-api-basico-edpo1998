
const Server = require("./server")

const main = function (port){
    const src = new Server(port)
    src.initServer();
}

main(5000)


