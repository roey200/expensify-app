//
// Object destructuring
//
// const person = {
//     name: 'Roey',
//     age: 30,
//     location: {
//         city: 'Amsterdam',
//         temp: 26
//     }
// }

// const  {name = 'Anon', age} = person

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location

// console.log(`It's ${temperature} in ${city}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)


//
// Array destructuring
//

const address = ['206 popo', 'Amsterdam', 'NL', '1074DD']
const [street, city, state, zip] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [hotCoffe, , medium] = item
console.log(`A medium ${hotCoffe} costs ${medium}`)