const Passenger = require('./Passenger')
describe('Passenger', function () {
  const passenger = new Passenger("Hena",25,"female")
    test('has a name', function () {
  
        expect(passenger.name).toBe('Hena');
    });
    test('does not have a name', function () {
        expect(() => new Passenger()).toThrowError('passenger must have a name');
    });
    test('has age', function () {
        
        expect(passenger.age).toBe(25);
    });
    test('has gender', function () {
      
        expect(passenger.gender).toBe("female");
    });
})