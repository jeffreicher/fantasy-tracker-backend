const NBA = require('nba')

async function scoreboard(date) {
  try {
    let data = await NBA.stats.scoreboard({ gameDate: date })
    // console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

module.exports = scoreboard
