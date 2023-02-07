const express = require('express')
// const { validate } = require('./utils')
const { validateYup } = require('./utils')

const app = express()
app.use(express.json())

app.listen(8080, () => console.log('Server Up'))

app.post('/users', validateYup, (req, res) => {
    //TODO: registro en la BD
    res.status(200).send({ message: "OK!" })
})