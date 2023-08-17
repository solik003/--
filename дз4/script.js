// 2
function detonatorTimer(delay) {
    let count = delay;

    function write_count() {
        if (count > 0) {
            console.log(count);
            count--;
            setTimeout(write_count, 1000);
        } else {
            console.log("BOOM!");
        }
    }
    write_count();
}
detonatorTimer(3);

// 1

function detonatorTimer(delay) {
    function write_count() {
        if (delay > 0) {
            console.log(delay);
            delay--;
        } else {
            clearInterval(interval);
            console.log("BOOM!");
        }
    }

    const interval = setInterval(write_count, 1000);
}

detonatorTimer(3);

// 3
// const person = {
//     firstName:'Alina',
//     surname:'KKK',
//     gender:'female',
//     age:38,
//     hasWork:true,
//     carBrand:'Ferrari',
//     introduce(){
//         console.log(`This is ${this.firstName} and she is ${this.age} years old`);
//     },
//     future(){
//         console.log(`She will buy a ${this.carBrand} car when she is ${this.age + 5} years old.`)
//     },
//     information(){
//         if (this.age > 20) {
//             person.hasWork = true;
//        }else{
//            person.hasWork = false;
//         }
//     }
    
// };
// person.introduce();
// person.future();
// person.information();
// console.log(person.hasWork);

// 4
const person = {
    firstName:'Alina',
    surname:'KKK',
    gender:'female',
    age:38,
    hasWork:true,
    carBrand:'Ferrari',
    introduce(){
        console.log(`This is ${this.firstName} and she is ${this.age} years old`);
    },
    future(){
        console.log(`She will buy a ${this.carBrand} car when she is ${this.age + 5} years old.`)
    },
    information(){
        if (this.age > 20) {
            person.hasWork = true;
       }else{
           person.hasWork = false;
        }
        
    }
    
};
person.introduce();
person.future();
person.information();
console.log(person.hasWork);
const securedSelfIntroduce = () => person.introduce();
setTimeout(securedSelfIntroduce, 1000);
const securedSelfFuture = () => person.future();
setTimeout(securedSelfFuture, 2000);
const securedSelfInformation = () => person.information();

// 5
function slower(seconds) {
    return function(targetFunction) {
        return function(...args) {
            setTimeout(() => {
                targetFunction(...args);
            }, seconds * 1000);
        };
    };
}
function someFunction(count) {
    if (count > 0) {
        console.log(count);
        count--;
        setTimeout(() => someFunction(count), 1000);
    } else {
        console.log("BOOM!");
    }
}
let slowedSomeFunction = slower(5)(someFunction);
slowedSomeFunction();