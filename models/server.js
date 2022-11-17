const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.prodsPath = '/api/prods';

        //Middlewares
        this.middlewares()
        //Rutas
        this.routes();

    }

    middlewares(){
        //Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.prodsPath, require('../routes/products')); 
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }


}


module.exports = Server;