import supertest from 'supertest'
import app from '../src/app'

const request = supertest(app)

describe('GET /healthcheck', () => {
  it('returns a 200', async (done) => {
    const response = await request.get('/healthcheck')

    expect(response.status).toBe(200)
    expect(response.text).toContain('GLC')

    done()
  })
})
