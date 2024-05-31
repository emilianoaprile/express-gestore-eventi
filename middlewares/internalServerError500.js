const internalServerError = (req, res, next) => {
    res.status(500).send('Errore interno del server');
}

module.exports = {
    internalServerError
}