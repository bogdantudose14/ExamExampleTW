const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test post /students', () => {
  
    test('If request body is not sent server should respond with status code 400 and {"message": "body is missing"}', (done) => {
        request(app).post('/students')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('body is missing')
                done()
            })
    })

    test('If request body is present but did not follow the specified format, server should respond with status code 400 and {"message": "malformed request"}', (done) => {
        request(app).post('/students')
            .send({name : 'x', age : 22})
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('malformed request')
                done()
            })
    })


    test('Age should not be negative', (done) => {
        request(app).post('/students').send({
            name: "aaa",
            address: "nowhere",
            age: -4
        }).expect(400).then(res => {
            expect(JSON.parse(res.text).message).toBe('age should be a positive number')
            done()
        })
    })

    test('A student can be added', (done) => {
        request(app).post('/students').send({
            name: "aaa",
            address: "nowhere",
            age: 24
        }).expect(201).then(res => {
            expect(JSON.parse(res.text).message).toBe('created')
            done()
        })
    })

    test('The student list is valid', (done) => {
        request(app).get('/students').send().expect(200)
            .then(res => {
                let response = JSON.parse(res.text)
                let sample = {
                    id:11,
                    name: "aaa",
                    address: "nowhere",
                    age: 24
                }
                expect(response).toHaveLength(11)
                expect(response).toContainEqual(sample)
                done()
            })
    })

})



