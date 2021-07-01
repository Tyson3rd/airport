const Plane = require('./Plane')
describe('Plane', function () {
  const plane = new Plane("Business",39,3)
    test('has a pclass', function () {
  
        expect(plane.pclass).toBe('Business');
    });
    test('does not have a pclass', function () {
        expect(() => new Plane()).toThrowError('plane must have a pclass');
    });
    test('has seat', function () {
        
        expect(plane.seat).toBe(39);
    });
    test('has restrooms', function () {
      
        expect(plane.restrooms).toBe(3);
    });
})