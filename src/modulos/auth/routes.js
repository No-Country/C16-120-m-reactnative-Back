const express = require('express');

const respuesta = require('../../red/respuestas')
const controlador = require ('./index');

const router = express.Router();

router.post('/login', login);

async function login (req, res, next) {
    
    console.log(req.body.pass)
try {
        const token = await controlador.login(req.body.email, req.body.pass);
        respuesta.success(req, res, token, 200);
    } catch(err){
        next(err);
    }
};

module.exports= router