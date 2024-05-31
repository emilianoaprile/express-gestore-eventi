const path = require('path');
const fs = require('fs');

const index = (req, res) => {
    res.send('Index controller')
};

const store = (req, res) => {
    res.send('Store controller')
};

const update = (req, res) => {
    res.send('Update controller')
};

module.exports = {
    index,
    store,
    update
}