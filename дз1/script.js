//-------------- 1
// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// userNames.sort();
// //console.log(userNames);
// let initials=[];
// //console.log(userNames);
// for(let i=0;i<userNames.length;i++){
//     let name_parts = userNames[i].split(" ");
//     console.log(name_parts);
//     let name_initials = "";
    
//     for(let k=0;k<name_parts.length;k++){
//         const name_part = name_parts[k];
//         if(name_part.length > 0){
//             name_initials += name_part[0].toUpperCase() + ".";
//         }
//     }
    
//     initials.push(name_initials.trim());
// }
// console.log(initials);

//------------ 2
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowels = ['А','Е','Є','И','І','О','Ю','Я']
let filteredNames = [];

//умова
for (let i = 0; i < userNames.length; i++) {
  const firstLetter = userNames[i][0];
  if(vowels.includes(firstLetter)){
    filteredNames.push(userNames[i]);
  }
}
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//вбудований метод
filteredNames = userNames.filter((name) => {
  const firstLetter = name[0];
  return ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'].includes(firstLetter);
});
console.log(filteredNames);

//--------------- 3
const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');
reverseMaxValue = +reverseMaxValue;
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//------------------- 4
function flatten(arr) { return arr. flat(Infinity) } 
const resultsArray = [1, 2, [3, [4]]];
result = flatten(resultsArray);
let dob = 1;
console.log(result);
for(let i=0;i<result.length;i++){
    dob *= result[i];
}
console.log(dob);