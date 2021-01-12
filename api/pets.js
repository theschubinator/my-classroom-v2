module.exports = () => {
    const data = { pets: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.pets.push({ id: i, name: `pets${i}` })
    }
    return data
  }
