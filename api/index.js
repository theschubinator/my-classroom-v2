const users = require('./users');
const pets = require('./pets');

module.exports = () => {
    return {
        users: users(),
        pets: pets()
    }
}
