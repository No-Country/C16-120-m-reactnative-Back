require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000 ,
    },

    jwt : {
        secret: process.env.JET_SECRET || ' notasecreta'
    },
    mysql : {
        host: process.env.DB_HOST || 'pp',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || ' ejemplo'
        
    }
}