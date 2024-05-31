const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "db", "events.json");

class EventModel {
  constructor(id, title, description, date, maxSeats) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
  }

  static readJSON(callback) {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        return callback(error);
      } else {
        const events = JSON.parse(data);
        return callback(null, events);
      }
    });
  }

  static saveJSON(events, callback) {
    fs.writeFile(filePath, JSON.stringify(events), "utf-8", (error) => {
      if (error) {
        return callback(error);
      } else {
        console.log("Salvataggio avvenuto con successo");
      }
    });
  }

  static getEventById(id, callback) {
    this.readJSON((error, events) => {
      if (error) {
        return callback(error);
      }

      const event = events.find((event) => event.id === id);
      if (event) {
        return callback(null, event);
      } else {
        return callback(null, 'Evento non trovato');
      }
    });
  }

  static getEvents(callback) {
    this.readJSON((error, events) => {
      if (error) {
        return callback(error);
      }
      return callback(null, events);
    });
  }

  static addEvent(event, callback) {
    this.readJSON((error, events) => {
      if (error) {
        return callback(error);
      }
      const newEventId = events.length + 1;
      const newEvent = {...event, id: newEventId };
      events.push(newEvent);
      this.saveJSON(events, callback);
    });
  }
}

module.exports = EventModel;
