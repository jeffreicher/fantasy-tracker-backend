import scoreboard from '../../routes/scoreboard'

describe('tests if scoreboard calls correct route', () => {
  jest.mock('scoreboard mock', () => ({
    async scoreboard() {
      return data
    }
  }))
  it('should be called', async () => {
    const scoreboardData = await scoreboard()
    expect(scoreboardData).toBe(1)
  })
})
