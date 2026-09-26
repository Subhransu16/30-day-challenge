//If you want to find leap years using a for loop in JavaScript,
//  you can check each year within a given range.

for (let year = 2000; year <= 2025; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year + " is a leap year");
    }
}

//The for loop starts from the year 2000 and continues until 2025. For every year,
//  the if condition checks whether the year is a leap year. A year is a leap year if it is divisible by 400,
//  or if it is divisible by 4 but not divisible by 100. If the condition is true, that year is printed as a leap year. 
// For example, the output will include 2000, 2004, 2008, 2012, 2016, 2020, and 2024.