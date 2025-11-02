const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const freq = {};
const freqMap=new Map();

fruits.forEach(fruit=>{
   freq[fruit] = (freq[fruit] || 0) + 1

  // 2nd solution
  // freq[fruit]=!freq[fruit] ? 1 : freq[fruit]+1

  // 1 solution
//  if(!freq[fruit]){
//   freq[fruit]=1;
//  } 
//  else{
//   freq[fruit]=freq[fruit]+1
//  }
})
fruits.forEach(fruit=>{
  // solve3
  freqMap.set(fruit,(freqMap.get(fruit)||0)+1)
  // solve2
  // freqMap.set(fruit,freqMap.get(fruit)?freqMap.get(fruit)+1:1)

  // solve 1
  // if(!freqMap.has(fruit)){
  //   freqMap.set(fruit,1)
  // }
  // else{
  //   freqMap.set(fruit,freqMap.get(fruit)+1)
  // }
})
console.log(freqMap)