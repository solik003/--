"use strict";

class Animal{
    #name;
    constructor(age, isAlive) {
        this.age = age;
        this.isAlive = isAlive;
        this.#name = 'Jecki';
    }
    getName() {
        return this.#name;
    }

    getAge() {
        return this.age;
    }

    AnimalisAlive() {
        return this.isAlive;
    }
}
class Vertebrates extends Animal{
    #habitat;
     constructor(name, age, isAlive, backboneType,number,hasFins) {
        super(name, age, isAlive);
        this.backboneType = backboneType;
        this.#habitat = 'Water';
        this.number = number;
        this.hasFins = hasFins;
     }
     getBackboneType() {
        return this.backboneType;
    }
    hasFins() {
        return this.hasFins;
    }
    getHabitat() {
        return this.#habitat;
    }
    setHabitat(newHabitat) {
        this.#habitat = newHabitat;
    }
}
class Invertebrates extends Animal{
    #locomotionMethod;
    constructor(name, age, isAlive, habitat, reproductiveSystem) {
        super(name, age, isAlive);
        this.habitat = habitat;
        this.#locomotionMethod = 'run';
        this.reproductiveSystem = reproductiveSystem;
    }
    getHabitat() {
        return this.habitat;
    }

    getLocomotionMethod() {
        return this.#locomotionMethod;
    }
    setLocomotionMethod(newlocomotionMethod) {
        this.#locomotionMethod = newlocomotionMethod;
    }

    getReproductiveStrategy() {
        return this.reproductiveStrategy;
    }

}
class Fish extends Vertebrates{
    #fishLength;
    constructor(name, age, isAlive, backboneType,number,location,color) {
        super(name, age, isAlive, backboneType,number);
        this.location = location;
        this.color = color;
        this.#fishLength = 13;
        
    }
    hasFeathers() {
        return false;
    }
    getColor() {
        return this.color;
    }
    getLength() {
        return this.#fishLength;
    }
    setLength(newfishLength)
    {
        this.#fishLength = newfishLength;
    }
    getBackboneType() {
        return this.backboneType;
    }
}
class Reptiles extends Vertebrates{
    #isVenomous;
     constructor(name, age, isAlive, backboneType, isColdBlooded,isAquatic) {
        super(name, age, isAlive, backboneType);
        this.isColdBlooded = isColdBlooded;
        this.#isVenomous = true;
        this.isAquatic = isAquatic;
    }
    GetisColdBlooded() {
        return this.isColdBlooded;
    }
    sleep(hours) {
        return `${this.getName()} sleeps for ${hours} hours.`;
    }
    isVenomous() {
        return this.#isVenomous;
    }
    getIsAquatic() {
        return this.isAquatic;
    }
    getBackboneType() {
        return this.backboneType;
    }
}
const fish1 = new Fish('Nemo', 2, true, 'vertebrate', 'ocean','grey',45);
console.log(fish1.getName());      
console.log(fish1.getAge());       
console.log(fish1.getBackboneType());  
console.log(fish1.hasFeathers());
const vertebrate = new Vertebrates("Human", 30, true, "Spinal column",4,true);
console.log(vertebrate);
console.log(vertebrate.getAge());
const reptile = new Reptiles("Nara",23,false,'vertebrate',true,false);
console.log(reptile);
console.log(reptile.GetisColdBlooded());
const anim = new Animal(5, true);
console.log(anim);
console.log(anim.getName());
