jest.mock('../../routes/scoreboard', () => ({
  scoreboard: jest.fn().mockResolvedValue({
    avaliable: true,
    eastConfStandingsByDay: true,
    gameHeader: true,
    lastMeeting: true,
    lineScore: true,
    seriesStandings: true,
    westConfStandingsByDay: true
  })
}))

const { scoreboard } = require('../../routes/scoreboard')

describe('tests if scoreboard calls correct route', () => {
  it('should be called', async () => {
    const {
      avaliable,
      eastConfStandingsByDay,
      gameHeader,
      lastMeeting,
      lineScore,
      seriesStandings,
      westConfStandingsByDay
    } = await scoreboard()
    expect(avaliable).toBe(true)
    expect(eastConfStandingsByDay).toBe(true)
    expect(gameHeader).toBe(true)
    expect(lastMeeting).toBe(true)
    expect(lineScore).toBe(true)
    expect(seriesStandings).toBe(true)
    expect(westConfStandingsByDay).toBe(true)
  })
})
