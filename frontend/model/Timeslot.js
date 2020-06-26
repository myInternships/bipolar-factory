var strapi = require('./strapi')()

class Timeslot {

    static async add(entry) {
        await strapi.createEntry(entry)
    }
}

module.exports = Timeslot