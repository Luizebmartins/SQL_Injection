const express = require('express')
const database = require('../infra/database')
const router = express.Router()

router.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const results = await database.query(`select * from produtos where id =${id}`)
    res.json(results)

})

module.exports = router