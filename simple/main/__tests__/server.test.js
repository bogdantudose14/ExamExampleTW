const request = require('supertest')
const app = require('./../app')

describe('Test get index', () => {
  
    test('Can get index', (done) => {
        request(app).get('/')
            .send()
            .expect(200)
            .then(res => {
                expect(res.text).toContain('A simple app')
                done()
            })
    })

})


