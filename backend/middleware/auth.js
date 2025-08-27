const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

const auth = (req,res,next) => {
    const token = req.header("Authorization")
    if(!token) return res.status(401).json({message: "Acesso Negado"})
    
    try {
        const verified = jwt.verify(token, SECRET)
        req.user = verified.id
        next()
    } catch(err) {
        res.status(400).json({message: "Token Invalido"})
    }
}

module.exports = auth
