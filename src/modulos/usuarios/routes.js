const express = require('express');

const seguridad = require('./seguridad');

const respuesta = require('../../red/respuestas')
const controlador = require ('./index');

const router = express.Router();

router.get('/', todos);
router.get('/:id' , uno);
router.post('/', agregar);
router.put('/', seguridad(),eliminar);


 async function todos (req,res, next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
        } catch(err){
            next(err);
    };
 }
     async function uno (req, res){
        try {
            const items = await controlador.uno(req.params.id);
            respuesta.success(req, res, items, 200);
            } catch(err){
                next(err);
            }
    }

    async function agregar (req, res, next){
        try {
            const items = await controlador.agregar(req.body);
            console.log(req.body)
            if(req.body.id == 0) {
                mensaje = 'Usuario creado';
            }
            // else {
            //     mensaje = 'Datos actualizados'
            // }
            respuesta.success(req, res, "ok", 201);
            return items
            } catch(err){
                next(err)
            }
            
    }

     async function eliminar (req, res, next){
        try {
            const items = await controlador.eliminar(req.body
                );
            console.log(req.body.id)
            respuesta.success(req, res,'Cuenta eliminada', 200);
            return items
            } catch(err){
                next(err)
            }
            
    }
    

module.exports= router