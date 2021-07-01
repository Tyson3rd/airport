const Airport = require('./Airport')
describe('Airport', function () {
  const airport = new Airport("Large",11,7)
    test('has a size', function () {
        expect(airport.size).toBe('Large');
    });
    test('does not have a size', function () {
        expect(() => new Airport()).toThrowError('airport must have a size');
    });
    test('has terminals', function () {
        expect(airport.terminals).toBe(11);
    });
    test('has runways', function () {
        expect(airport.runways).toBe(7);
    });
})