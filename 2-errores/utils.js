const yup = require('yup')

const validate = (req, res, next) => {
    const {name, age, email} = req.body
    if (!name) return res.status(400).send({ error: 'name is required'})
    if (typeof name !== "string") return res.status(400).send({ error: 'name must be a string'})
    if (name.length < 5) return res.status(400).send({ error: 'name must be at least 5 characters'}) 
    if (!/^[a-z]+$/i.test(name)) return res.status(400).send({ error: 'name must contains only a-z letters'})
    next()
}

const validateYup = (req, res, next) => {
    const schema = yup.object().shape({
        name: yup.string().min(5).matches(/^[a-z]+$/).required()
    })
    schema.validateSync(req.body)
    next()
}

module.exports = { validate, validateYup }