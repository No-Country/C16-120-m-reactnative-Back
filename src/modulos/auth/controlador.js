const TABLA = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../validacion');


module.exports= function (dbInyectada){

   let db = dbInyectada;

   if(!db){
        db = require('../../DB/mysql');
   }

   async function login(usuario, pass){
    const data = await db.query(TABLA, {usuario:usuario});
    return bcrypt.compare(pass, data.pass)
    .then(resultado => {
        if (resultado === true) {
            return auth.asignarToken({...date})
    } else {
        throw new Error ('Informacion erronea');
   }
})
   }
   
   
    async function agregar (data) {
       
        const authData= {
            id:data.id,
        }
        
        if(data.usuario){
            authData.usuario = data.usuario
        }

        if(data.pass){
            authData.pass = await bcrypt.hash(data.pass.toString(), 5);
        }
        return db.agregar(TABLA, authData);
    }
    return {
        agregar,
        login
    }
}
 


