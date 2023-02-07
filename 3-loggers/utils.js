const winston = require('winston')
const createLogger = (env) => {
    if (env === "PROD") {
        return winston.createLogger({
            transports: [
                new winston.transports.File({ filename: './winston.log', level: "error"})
            ]
        })
    } else {
        return winston.createLogger({
            transports: [
                new winston.transports.Console({ level: "all"})
            ]
        })
    }
}

module.exports = createLogger