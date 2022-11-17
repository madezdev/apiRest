const{response} = require('assert');


const prodGet = (req, res) =>{

    const {id} = req.params;

    res.json({
        msg: 'GET API',
        id

    });

}

const prodPut = (req, res) =>{

    res.json({
        msg: 'PUT API'
    });

}

const prodPost = (req, res) =>{

    const body = req.body;

    res.json({
        msg: 'POST API',
        body
    });

}

const prodDelete = (req, res) =>{

    res.json({
        msg: 'DELETE API'
    });

}



module.exports ={
    prodGet,
    prodPut,
    prodPost,
    prodDelete
}