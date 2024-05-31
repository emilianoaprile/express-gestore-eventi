const path = require('path');
const fs = require('fs');
const eventModel = require('../models/Event.js');


const index = (req, res) => {
    const filters = req.query;
    eventModel.getEvents(filters, (error, events) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.json(events);
    })
};

const store = (req, res) => {
    const event = req.body;
    // chiamo il metodo statico addEvent della classe EventModel
    eventModel.addEvent(event, (error) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(event);
    })
};

const update = (req, res) => {
    res.send('Update controller')
};

module.exports = {
    index,
    store,
    update
}