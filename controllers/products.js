const{response} = require('express');
const{request} = require('express');
const Contenedor = require('../container')

const cont = new Contenedor('./products.json');

const prodGet = async (req, res = response) =>{

    const prods = await cont.getAll() ;

    res.json({
        msg: 'Listado de todos los productos',
        prods

    });

}

const prodGetById = async (req = request, res = response) =>{
    const id =req.params.id;
    const prods = await cont.getById(parseInt(id)) ;

    res.json({
        msg: 'Producto buscado por ID',
        prods

    });

}

const prodPut = (req, res) =>{

    res.json({
        msg: 'PUT API'
    });

}

const prodPost = async (req =request, res = response) =>{

    const obj = req.body;
    const prods = await cont.save(parseInt());
    res.json({
        msg: 'POST API',
        prods
    });

}

const prodDelete = async (req, res) =>{
    const id = req.params.id;
    const prodsD = await cont.deleteByid(parseInt(id));
    res.json({
        msg: 'DELETE API',
        prodsD
    });

}



module.exports ={
    prodGet,
    prodGetById,
    prodPut,
    prodPost,
    prodDelete
}