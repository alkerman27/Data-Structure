//create a function that reverses a string;
//'Hi My name is Mark' should be:
//'kraM si eman yM iH'


//naive approach
const myNameInReverse = 'Hi My name is MarkraM'


function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Invalid Input'
  }

  const backwards = []
  for(let count = 1; count <= str.length; count++) {
    backwards.push(str[str.length - count])
  }
    return backwards.join('');
}

console.log(reverse(myNameInReverse));

