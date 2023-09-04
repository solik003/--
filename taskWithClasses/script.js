"use strict";

class Animal{
    constructor(name, age, isAlive) {
        this._name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    getName() {
        return this._name;
    }

    getAge() {
        return this.age;
    }

    isAlive() {
        return this.isAlive;
    }
}
class Vertebrates extends Animal{
     constructor(name, age, isAlive, backboneType,number,hasFins) {
        super(name, age, isAlive);
        this.backboneType = backboneType;
        this._habitat = '';
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
        return this._habitat;
    }
    setHabitat(newHabitat) {
        this._habitat = newHabitat;
    }
}
class Invertebrates extends Animal{
    constructor(name, age, isAlive, habitat, locomotionMethod, reproductiveSystem) {
        super(name, age, isAlive);
        this.habitat = habitat;
        this._locomotionMethod = locomotionMethod;
        this.reproductiveSystem = reproductiveSystem;
    }
    getHabitat() {
        return this.habitat;
    }

    getLocomotionMethod() {
        return this._locomotionMethod;
    }

    getReproductiveStrategy() {
        return this.reproductiveStrategy;
    }

}
class Fish extends Vertebrates{
    constructor(name, age, isAlive, backboneType,number,location,color,fishLength ) {
        super(name, age, isAlive, backboneType,number);
        this.location = location;
        this.color = color;
        this._fishLength = fishLength;
        
    }
    hasFeathers() {
        return false;
    }
    getColor() {
        return this.color;
    }
    getLength() {
        return this._fishLength;
    }
    getBackboneType() {
        return this.backboneType;
    }
}
class Reptiles extends Vertebrates{
     constructor(name, age, isAlive, backboneType, isColdBlooded,isVenomous,isAquatic) {
        super(name, age, isAlive, backboneType);
        this.isColdBlooded = isColdBlooded;
        this._isVenomous = isVenomous;
        this.isAquatic = isAquatic;
    }
    GetisColdBlooded() {
        return this.isColdBlooded;
    }
    sleep(hours) {
        return `${this.getName()} sleeps for ${hours} hours.`;
    }
    isVenomous() {
        return this._isVenomous;
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
const reptile = new Reptiles("Nara",23,false,'vertebrate',true,false,true);
console.log(reptile);
console.log(reptile.GetisColdBlooded());



