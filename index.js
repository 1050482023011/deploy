const express = require('express')
//import express from express
const app = express()
const port = process.env.PORT || 3000

const cors = require("cors") //npm i cors -> para instalar
app.use(cors())

app.get('/', (req,res) => {
    res.send('Olá mundo!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
