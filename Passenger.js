class Passenger {
 
    name; // declaration not required by JS but makes
            // it more explicit that we have
            // this property in the class and more like Java!

    /**
     * Creates a Bag.
     * 
     * @param {number} weight - the weight of the bag
     */
    constructor(name, age, gender) {
        if (!name) {
            throw new Error('passenger must have a name');
        }
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

module.exports = Passenger;

