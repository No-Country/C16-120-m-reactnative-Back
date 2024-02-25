const auth = require('../../validacion')

module.exports = function chequearAuth() {
    
    function middleware(req, res, next){
        const id =req.body.id
        console.log(req.body)
        auth.chequearToken.confirmarToken(req, id)
        next();
    }
    return middleware
}