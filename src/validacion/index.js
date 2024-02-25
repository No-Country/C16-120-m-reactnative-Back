const jwt = require('jsonwebtoken');
config = require ('../config')

const secret = config.jwt.secret;


function asignarToken(data){
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const chequearToken = {
    confirmarToken :function(req, id){
       
        const decodificado = decodificarCabecera(req);
        console.log(decodificado.id, id)
    
    //Validando decodificado.id contra id( viene en el header, me aseguro de que sea yo o mio)
    //     if (decodificado.id !==id){
    //     throw new Error("Acceso denegado")
    // }
    }
}

function obtenerToken(autorizacion){
    if(!autorizacion){
        throw new Error('No viene token');
    }
// if(autorizacion.indexOf('Bearer') === -1){
//     throw new Error('Formato invalido');

// }
let token = autorizacion.replace('Bearer ', '')
console.log(token)
return token;
}

function decodificarCabecera(req){
    
    const autorizacion = req.headers.authorization || '';
    const token = obtenerToken(autorizacion);
    const decodificado = verificarToken(token);

    req.user = decodificado ;

    return decodificado;
}
module.exports ={
    asignarToken,
    chequearToken,
}