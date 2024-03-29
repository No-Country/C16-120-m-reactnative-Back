const express = require('express');
const respuesta = require('../../red/respuestas')
const controlador =require ('./index');
const seguridad = require('../usuarios/seguridad')
const router = express.Router();

router.get('/',todos);
router.get('/:id' , uno);
router.post('/',seguridad(),agregar);
router.put('/', eliminar);


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
                mensaje = 'Ruta creada';
            }
            else {
                mensaje = 'Ruta actualizada'
            }
            respuesta.success(req, res, mensaje, 201);
            return items
            } catch(err){
                next(err)
            }
            
    }

     async function eliminar (req, res, next){
        try {
            const items = await controlador.eliminar(req.body);
            console.log(req.body)
            respuesta.success(req, res,'Ruta eliminada', 200);
            return items
            } catch(err){
                next(err)
            }
            
    }
    

module.exports= router