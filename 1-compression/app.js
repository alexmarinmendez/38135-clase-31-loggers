const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression({
    level: 0
}))

app.listen(8080, () => console.log('Server Up'))

app.get('/', (req, res) => {
    res.send('Hola Mundo!!!'.repeat(100000))
})