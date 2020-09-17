// const person = {
//   name: 'Shiran',
//   age: 35,
//   location: {
//     city: 'Montreal',
//     temp: 25
//  }
// };

// const { name='anonymous', age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp: tempeture } = person.location;
//  if(city && tempeture){
//    console.log(`its ${tempeture} in ${city}`)
//  }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'penguin'
//   }
// };

// const { name: publisherName = 'self-published' } = book.publisher;
//console.log(publisherName);

//
//Array structuring
//

// const address = ['6794 louis pasteur', 'montreal', , 'h4w2x2'];
// const [street, city, state = 'ontario', zip] = address
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (cold)', '$2.00', '$2.50', '$2.75'];

const [myitem, , m ] = item;

console.log(`A medium ${myitem} costs ${m}`);



















