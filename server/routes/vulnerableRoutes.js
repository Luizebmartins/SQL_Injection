const express = require('express')
const database = require('../infra/database')
const router = express.Router()

router.get('/products/:nome', async (req, res) => {
    try {
        const results = await database.query(`select * from produtos where nome ='${req.params.nome}'`)
        res.status(200).json(results)
        
    } catch (e) {
        res.status(404).send(e.message)
    }

})

router.post('/login', async (req, res) => {
    const userData = req.body
    try {
        const user = await database.query(`select * from usuarios where login = '${userData.login}' and senha = '${userData.senha}'`)
        if(!user.length) throw new Error ('Dados incorretos')

        res.status(200).json(user)
        
    } catch (e) {
        res.status(401).send(e.message)
    }
    
})

module.exports = router
