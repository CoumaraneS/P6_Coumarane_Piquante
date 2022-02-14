const rateLimit = require("express-rate-limit")

// Limiteur de restriction de tentative de connexion utilisateur
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Trop de tentatives de connexion. Compte bloqué pour 5 minutes"
})

module.exports = { limiter }