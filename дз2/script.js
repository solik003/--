///////// 1
function durationBetweenDates(start_date = '1970-01-01 00:00:00', end_date = '1970-01-01 00:00:00', dimension = 'seconds') {
    const start_dt = new Date(start_date);
    const end_dt = new Date(end_date);
  
    if (isNaN(start_dt) || isNaN(end_dt)) {
      throw new Error("Invalid date format");
    }
  
    const timeDiff = Math.abs((end_dt - start_dt) / 1000);
  
    switch (dimension) {
      case 'days':
        return timeDiff / 86400;
      case 'hours':
        return timeDiff / 3600;
      case 'minutes':
        return timeDiff / 60;
      case 'seconds':
        return timeDiff;
      default:
        throw new Error("Invalid dimension");
    }
  }
  console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); 
  console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); 
  console.log(durationBetweenDates('2023-07-23 12:00:00', '2023-07-23 10:00:00', 'hours')); 
  console.log(durationBetweenDates('2023-07-23 12:00:00', '2023-07-23 10:00:00', 'minutes')); 


// 2
function optimizer(data) {
    const updatedData = {};
    for (el in data){
        const lowerCaseKey = el.toLowerCase();
        //console.log(Object.entries(data))
        //console.log(lowerCaseKey);
        const price = parseFloat(data[el]).toFixed(2);
        updatedData[lowerCaseKey] = price;
    }
    return updatedData;
};
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
//console.log(priceData);
let updatedPriceData = optimizer(priceData);
    
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// 3
function recursiveOddSumTo(number) {
    if (number > 1) {
      return (number % 2 === 1 ? number : 0) + recursiveOddSumTo(number-1); 
    } else {
      return number;
    }
  }
  console.log(recursiveOddSumTo(1)); 
  console.log(recursiveOddSumTo(10)); 
  console.log(recursiveOddSumTo(-10)); 

// 4
function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if(i%2===1){sum +=i;}
    }
    return sum;
  }
  console.log(iterativeOddSumTo(1)); 
  console.log(iterativeOddSumTo(10)); 
  console.log(iterativeOddSumTo(-10)); 
    