const express = require('express')
// const log4js = require('log4js')
const createLogger = require('./utils')

const app = express()
app.use(express.json())

app.listen(8080, () => console.log('Server Up'))

// log4js.configure({
//     appenders: {
//         consola: { type: "console" },
//         debugFile: { type: "file", filename: './debug.log'}
//     },
//     categories: {
//         default: {
//             appenders: ["consola"],
//             level: "ALL"
//         },
//         DEV: {
//             appenders: ["consola"],
//             level: "FATAL"
//         },
//         PROD: {
//             appenders: ["debugFile"],
//             level: "ALL"
//         }
//     }
// })

// const logger = log4js.getLogger(process.env.NODE_ENV)
// const logger = log4js.getLogger('PROD')
// const logger = log4js.getLogger('DEV')

const logger = createLogger('PROD')

app.get('/', (req, res) => {
    // console.log('Se accedió a la ruta /')
    logger.error('Se rompió todo!!')
    logger.info('Alguien ingresó a esta ruta')
    logger.warn('Alguien ingresó a esta ruta')
    res.send('Hola Mundo Coders!!!')
})
