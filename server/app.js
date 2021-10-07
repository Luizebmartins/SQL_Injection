const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./routes/productsRoute'))

app.listen(3000)