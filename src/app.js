const express = require ('express');
const cors = require ('cors');
const morgan = require('morgan');
const config = require ('./config');

const senderos = require ('./modulos/senderos/routes')
const usuarios = require('./modulos/usuarios/routes')
const error = require ('./red/errors');
const validacion = require('./modulos/auth/routes')

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus:200
}

//Middleware
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port)

//rutas 
app.use('/api/trails', senderos);
app.use('/api/usuarios', usuarios);
app.use('/api/auth', validacion );
app.use(error);


module.exports= app;