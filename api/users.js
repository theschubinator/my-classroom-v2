const Chance = require('chance');

const chance = new Chance();

module.exports = () => {
    const data = { users: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: chance.name() })
    }
    return data
  }
