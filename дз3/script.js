// // 1
// function addThemAll(...nums){
//     return nums.reduce((sum,el)=>sum+el,0);
// } 
// console.log(addThemAll(2,4)); 

// 4
// const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

// function filterUnique(array) {
//     const filteredArray = [];
//     array.forEach((value) => {
//         if (!filteredArray.includes(value)) {
//             filteredArray.push(value);
//         }
//       });
//       return filteredArray;
// }
// console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олен

// 2
// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }
// // const calc = multiply(5);
// // console.log(calc(4));
// const calc = multiply(5)(5);
// console.log(calc);
// console.log(multiply(2)(-2))// -4
// console.log(multiply(4)(3))// 12

// 3
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log("initial array",movies);
console.log("Sorted by releaseYear",movies.sort(byProperty('releaseYear', true))); 
console.log("Sorted by runningTimeInMinutes property:",movies.sort(byProperty('runningTimeInMinutes', false))); 
console.log("Sorted by movieName:",movies.sort(byProperty('movieName', true)));

function byProperty(property, direction = true) {
    return function(a,b){
        if(a[property] < b[property]){
            return direction ? -1:1
        }
        if(a[property] > b[property]){
            return direction ? 1:-1
        }
        return 0;
    }
}