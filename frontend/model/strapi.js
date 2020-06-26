import Strapi from 'strapi-sdk-javascript/build/main'

const strapi = async () => {
    var strapi = new Strapi('http://localhost:1337')
    await strapi.login('pranav', 'pranav');
    return strapi
}

module.exports = strapi