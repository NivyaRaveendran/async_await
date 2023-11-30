console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const premMovie = async() => {
const promiseWifeBringingTics= new Promise((resolve, reject) => {
setTimeout (() => resolve('ticket'),3000);    
});

const getPopcorn = new Promise((resolve, reject) => {
    resolve(`popcorn`)
});

const addButter = new Promise((resolve, reject) => {
   resolve(`Butter`)
});

const getColdDrinks = new Promise((resolve, reject) => {
    resolve(`ColdDrinks`)
 });

let ticket= await promiseWifeBringingTics;
console.log(`wife: I have ${ticket}`);
console.log('husband: we should go in');
console.log('wife: no i am hungry');
let popcorn = await popcorn;

console.log(`husband: i got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: i need some butter on my popcorn');

let butter= await addButter;

console.log(`husband: i got some ${butter} on popcorn`);
console.log(`husband: anything else dear?`);
console.log('wife: i need some Cold Drinks');

let ColdDrinks= await getColdDrinks;

console.log(`husband: i got some ${ColdDrinks}`);
console.log(`husband: anything else`);
console.log(`wife: lets go we are getting late`);
console.log(`husband: thank u for the reminder *grins*`);

return ticket;
}
 
premMovie().then((m) =>console.log(`person3 : shows ${m}`));

console.log('person4 : shows Ticket');
console.log('person5 : shows Ticket');
