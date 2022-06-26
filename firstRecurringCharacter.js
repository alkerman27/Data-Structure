//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined


//naive approach
function firstRecurring(arr) {
  for(let i = 0; i < arr.length; i++) {
    
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] === arr[j + 1]) {
        return arr[j]
      }
      if(arr[i] === arr[j]) {
        return arr[i]
      } 
    }
   } 
   return undefined;
  }

//better approach
function firstRecurring1(arr) {
  const uniqueInput = {}
  for(let i = 0; i < arr.length; i++) {
    if(uniqueInput[arr[i]] !== undefined) {
      return arr[i]
    } else {
      uniqueInput[arr[i]] = i
    }
    console.log(uniqueInput);
  }
  return undefined;
}


console.log('naive approach: ',firstRecurring([2,1,3,5,5,1,2,4]));
console.log('better approach: ',firstRecurring1([2,1,3,1,5,5,4,2]));