// class Airport {
    
//     constructor(size) {
//       if (!size) {
//             throw new Error('airport must have a size');
//         }

//       this.size = size
//     }
// }

//  size = new size("Large")
// console.log() // 16
// module.export = Airport
/**
 * Represents a bag taken as either hand or cabin luggage on an aircraft
 */
class Airport {
 
    size; // declaration not required by JS but makes
            // it more explicit that we have
            // this property in the class and more like Java!

    /**
     * Creates a Bag.
     * 
     * @param {number} weight - the weight of the bag
     */
    constructor(size, terminals,runways) {
        if (!size) {
            throw new Error('airport must have a size');
        }
        this.size = size;
        this.terminals = terminals;
        this.runways = runways;
    }
}

module.exports = Airport;