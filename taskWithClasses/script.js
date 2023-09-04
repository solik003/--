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
    isColdBlooded() {
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


// class Bird extends Animal{
//     constructor(weight,name,age,species){
//         super(name,age,species);
//         this.weight = weight;
//     }
//     increaseAge() {
//         return this.age++;
//     }
//     getAge() {
//         return this.age;
//     }
//     fly() {
//         return "Flying!";
//     }
//     migrate(destination) {
//         return `Migrating to ${destination}.`;
//     }

//     buildNest() {
//         return "Building a cozy nest.";
//     }
// }
// class Beast extends Animal{
//     constructor(name, age,species, habitat) {
//         super(name, age,species);
//         this.habitat = habitat;
//     }
//     roar() {
//         return "Roaring!";
//     }
//     hunt() {
//         return "Hunting for prey!";
//     }
//     sleep() {
//         return "Sleeping in the den.";
//     }
//     getHabitat() {
//         return this.habitat;
//     }
// }
// class Insect extends Animal{
//     constructor(name, species, wingspan) {
//         super(name, species);
//         this.wingspan = wingspan;
//     }
//     buzz() {
//         return "Buzzing!";
//     }
//     eat() {
//         return "Pecking at seeds and insects.";
//     }
//     chirp() {
//         return "Chirping melodiously.";
//     }
//     getWingspan() {
//         return this.wingspan;
//     }
//     layEggs() {
//         return "Laying eggs for the next generation.";
//     }

//     buildNest() {
//         return "Building a complex nest structure.";
//     }
// }
// class Raptile extends Animal{
//     constructor(name, species, habitat, isVenomous) {
//         super(name, species);
//         this.habitat = habitat;
//         this.isVenomous = isVenomous;
//     }
//     crawl() {
//         return "Crawling!";
//     }
//     shedSkin() {
//         return "Shedding old skin to grow.";
//     }
//     getHabitat() {
//         return this.habitat;
//     }

//     isVenomous() {
//         return this.isVenomous;
//     }
// }
// const animal = new Animal("Dark",4,"frog");
// console.log(animal);
// console.log(animal.getAge());        
// console.log(animal.increaseAge());   
// console.log(animal.getAge());

// const bird = new Bird(15,"Hayk",4,"birds");
// console.log(bird);
// console.log(bird.increaseAge());