"use strict";

class Animal{
    constructor(name,age,species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
      makeSound() {
        return "Animal sound";
    }
    getSpecies() {
        return this.species;
    }
    increaseAge() {
        return this.age++;
    }

    getAge() {
        return this.age;
    }
}
class Bird extends Animal{
    constructor(weight,name,age,species){
        super(name,age,species);
        this.weight = weight;
    }
    increaseAge() {
        return this.age++;
    }
    getAge() {
        return this.age;
    }
    fly() {
        return "Flying!";
    }
    migrate(destination) {
        return `Migrating to ${destination}.`;
    }

    buildNest() {
        return "Building a cozy nest.";
    }
}
class Beast extends Animal{
    constructor(name, age,species, habitat) {
        super(name, age,species);
        this.habitat = habitat;
    }
    roar() {
        return "Roaring!";
    }
    hunt() {
        return "Hunting for prey!";
    }
    sleep() {
        return "Sleeping in the den.";
    }
    getHabitat() {
        return this.habitat;
    }
}
class Insect extends Animal{
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan;
    }
    buzz() {
        return "Buzzing!";
    }
    eat() {
        return "Pecking at seeds and insects.";
    }
    chirp() {
        return "Chirping melodiously.";
    }
    getWingspan() {
        return this.wingspan;
    }
    layEggs() {
        return "Laying eggs for the next generation.";
    }

    buildNest() {
        return "Building a complex nest structure.";
    }
}
class Raptile extends Animal{
    constructor(name, species, habitat, isVenomous) {
        super(name, species);
        this.habitat = habitat;
        this.isVenomous = isVenomous;
    }
    crawl() {
        return "Crawling!";
    }
    shedSkin() {
        return "Shedding old skin to grow.";
    }
    getHabitat() {
        return this.habitat;
    }

    isVenomous() {
        return this.isVenomous;
    }
}
const animal = new Animal("Dark",4,"frog");
console.log(animal);
console.log(animal.getAge());        
console.log(animal.increaseAge());   
console.log(animal.getAge());

const bird = new Bird(15,"Hayk",4,"birds");
console.log(bird);
console.log(bird.increaseAge());