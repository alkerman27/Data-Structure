//create a function that reverses a string;
//'Hi My name is Mark' should be:
//'kraM si eman yM iH'


//naive approach
const myNameInReverse = 'Hi My name is Mark'


function reverse(str) {
  console.log(typeof str);
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Invalid Input'
  }

  const backwards = []
  for(let count = 1; count <= str.length; count++) {
    backwards.push(str[str.length - count])
  }
    return backwards.join('');
}

//readable approach
function reverse2(str) {
  return str.split('').reverse().join('')
}

//modern approach
const reverse3 = str => str.split('').reverse().join('');

//spread operator

const reverse4 = str => [...str].reverse().join('')



console.log('naive approach: ',reverse(myNameInReverse));
console.log('readble approach: ',reverse2(myNameInReverse));
console.log('modern approach: ',reverse3(myNameInReverse));
console.log('spread operator: ', reverse4(myNameInReverse));



