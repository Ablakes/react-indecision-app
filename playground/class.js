class Person {
    constructor(name = 'Anonymous', age) {
        this.name = name;
        this.age = age;
    }
    wasBorn() {
        return this.name + " was born in " + (2018 - this.age);
    }
}



class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}



class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    wasBorn() {
        let description = super.wasBorn();
        if (this.hasLocation()) {
            description += ` From ${this.location}`;
        }
        return description;
    }

}

var alex = new Traveler('alex', 31);
console.log(alex.wasBorn());