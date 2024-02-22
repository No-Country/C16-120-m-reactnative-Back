const TABLA = 'usuarios';
const auth = require('../auth');
module.exports= function (dbInyectada){

   let db = dbInyectada;

   if(!db){
        db = require('../../DB/mysql');
   }
   
    function todos() {
        return db.todos(TABLA);
    }
    
    function uno (id) {
        return db.uno(TABLA, id);
    }
    
   async function agregar (body) {
        const usuario = {
            id: body.id,
            nombre:body.nombre,
            usuario:body.usuario,
            email:body.email,
            activo:body.activo

        }
        const respuesta = await db.agregar(TABLA, usuario);
        console.log('respuesta', respuesta)
        var insertId = 0;
        if(body.id == 0){
            insertId = respuesta.insertId;
        } else {
          insertId = body.id;
        }

        if(body.usuario || body.pass){
            await auth.agregar({
                id:insertId,
                usuario: body.usuario,
                pass:body.pass
            })
        }
        return true
    }
    
    function eliminar(body){
  
        return db.eliminar(TABLA, body)
    }

    return {
    todos,
    uno,
    eliminar,
    agregar

    }
}