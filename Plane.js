class Plane {
 
    pclass; // declaration not required by JS but makes
            // it more explicit that we have
            // this property in the class and more like Java!

    /**
     * Creates a Bag.
     * 
     * @param {number} weight - the weight of the bag
     */
    constructor(pclass, seat, restrooms) {
        if (!pclass) {
            throw new Error('plane must have a pclass');
        }
        this.pclass = pclass;
        this.seat = seat;
        this.restrooms = restrooms;
    }
}

module.exports = Plane;