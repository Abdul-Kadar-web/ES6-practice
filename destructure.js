const person = {name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kocu khet', phone:'1234567890', friends: ['Tom Hancks', 'Spider Man', 'Thor']}

const { phone, gfName, address  } = person;

// const complexObject = {
//     name: 'abc',
//     info: { address: 'kola bagan', leader: 'Tiger leader'}
// }

// const {leader} = complexObject.info


// short a uoprer vabe kora jai
// const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName, phone, address );
// console.log(gfName, phone, address );


const friends = ['sakib khan', 'arman khan', 'Amir khan', 'Salman khan', 'sharukh khan'];
const [chotoFriend,  ...restFriends] = friends;
console.log(restFriends);

// MDN destructuring---google it