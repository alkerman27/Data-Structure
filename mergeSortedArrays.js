
function mergeSortedArrays(arr1, arr2) {

  const mergedArr = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let arr1Count = 1;
  let arr2Count = 1;

  //check
  if(!arr1.length === 0) {
    return arr2;
  }
  if(!arr2.length === 0) {
    return arr1;
  }

  while(arr1Item || arr2Item) 
  {
    if(arr1Item < arr2Item) {
      mergedArr.push(arr1Item)
      arr1Item = arr1[arr1Count]
      arr1Count++
    } else {
      mergedArr.push(arr2Item)
      arr2Item = arr2[arr2Count]
      arr2Count++
    }
  }
  return mergedArr;
      
}





console.log(mergeSortedArrays([2,3,4,5], [1,6,8]));
// console.log(mergeSortedArrays([0,3,4,31], [4,6,30])); //[0,3,4,4,6,30,31]