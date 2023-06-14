import { provinces, names, products } from "./modules/data.js";

/*
Use forEach to console log each name to the console. You are allowed to call console.log seven times.
Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
Using toSorted to sort all provinces alphabetically.
Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
Using only reduce, turn the above into an object that indicates the province of an individual. In other words:
*/

// Use forEach to console log each name to the console. You are allowed to call console.log seven times.
let namesCount = 0;

names.forEach((name) => {
    if (namesCount < 7) {
        console.log(name);
        namesCount++;
    }
});

// Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
let namesProvincesCount = 0;

names.forEach((name) => {
    if (namesProvincesCount < 7) {

        console.log(`${name} (${provinces[namesProvincesCount]})`);
        namesProvincesCount++;
    }
});

// using map, loop over all province names and turn the string to all uppercase. Log the new array to the console.

const provinceNamesCaps = provinces.map((province) => {
    return province.toUpperCase();
}); 

console.log(provinceNamesCaps);

// create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]


const namesLength = names.map((name) => {
    return name.length;
}) 
console.log(namesLength);

// using toSorted to sort all provinces alphabetically.
const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);

// use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
const provincesWithCape = provinces.filter(province => {
    return province.includes("Cape");
})
console.log(provincesWithCape.length);

// create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
const namesWithS = names.map((name) => {
    name.split('').some((char) => {
        char.toUpperCase() === 's'
    });
    return name.toLocaleLowerCase().includes("s");
}) 
console.log(namesWithS);

/* using only reduce, turn the above into an object that indicates the province of an individual. In other words:
    {
        Ashwin: 'Western Cape',
        Sibongile: 'Gauteng',
        'Jan-Hendrik': 'Northern Cape',
        Sifso: 'Eastern Cape',
        Shailen: 'KwaZulu-Natal',
        Frikkie: 'Free State',
    }
*/


const individualProvinceObj = names.reduce((obj, name, index) => ({
    ...obj,
    [name]: provinces[index]
}), {});

console.log(individualProvinceObj);
