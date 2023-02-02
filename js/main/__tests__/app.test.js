const app = require('./../app')

const input0 = 10
const input1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
const dictionary0 = ['ipsum', 5]
const dictionary1 = ['ipsum', 'elit']
const dictionary2 = ['test']
const dictionary3 = ['lorem']

describe('Testing textProcessor function', () => {
    test('input parameter should be a string', (done)=> {
        expect(() => {
            app.bowdlerize(input0)
        }).toThrowError('Input should be a string')
        done()
    })
    test('dictionary parameter should contain strings', (done) => {
        expect(() => {
            app.bowdlerize(input1, dictionary0)
        }).toThrowError('Invalid dictionary format')
        done()
    })
    test('function should not modify initial input', (done) => {
        let processedInput = app.bowdlerize(input1, dictionary1)
        expect(processedInput).toBe('Lorem i***m dolor sit amet consectetur adipiscing e**t')
        done()
    })
    test('function should not modify initial input', (done) => {
        let unmodifiedInput = 'test'
        app.bowdlerize(unmodifiedInput, dictionary2)
        expect(unmodifiedInput).toBe('test')
        done()
    })
    test('function should work for capital letter strings', (done) => {
        let processedInput = app.bowdlerize(input1, dictionary3)
        expect(processedInput).toBe('L***m ipsum dolor sit amet consectetur adipiscing elit')
        done()
    })
});