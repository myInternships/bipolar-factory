var strapi = require('./strapi')

class Facility {
    static async increaseUserCount() {
        var _strapi = await strapi()
        await _strapi.updateEntry()
    }
}

const getAllFacilities = async () => await strapi.getEntries('facilities')

module.exports = Facility