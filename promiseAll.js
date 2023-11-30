console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`)
});

const getCandy = new Promise((resolve, reject) => {
    resolve(`Candy`)
});

const getCake = new Promise((resolve, reject) => {
    resolve(`Cake`)
});

let ticket= await promiseWifeBringingTics;
let [popcorn, Candy, Cake] = await Promise.all([popcorn, Candy, Cake]);
console.log(`${popcorn}, ${Candy}, ${Cake}`);
