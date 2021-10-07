const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: 'mysecretpassword',
    host: 'localhost',
    port: 5432,
    database: 'ecommerce'
})

module.exports = db