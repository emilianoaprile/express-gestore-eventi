const notFoundError = (req, res, next) => {
    res.status(404).send('Pagina non trovata');
}

module.exports = {
    notFoundError
}