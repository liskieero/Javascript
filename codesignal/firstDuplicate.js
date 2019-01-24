// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

function firstDuplicate(a) {
  return correctButTooTimely(a);
}

function correctButTooTimely(a) {
  const aLength = a.length;
  let ansObj = {};
  for(let i=0; i < aLength - 1; i++) {
    for(let j=i+1; j < aLength; j++) {
      if (a[i] === a[j] && !(Object.keys(ansObj).includes(String(a[i])))) {
        ansObj[a[i]] = j;
      }
    }
  }
  if (!(Object.keys(ansObj).length === 0)) {
    // min value
    const minIndex = Math.min(...Object.values(ansObj));
    const minValue = a[minIndex];
    return minValue;
  } else {
    return -1;
  }
}

arr = [1,1,2,2,1];
firstDuplicate(arr);



////////////////////////////////////////////////////////////////////////////////
function firstDuplicate(a) {
  let aObj = {};
  const aLength = a.length;

  for(let i = 0; i < aLength; i++) {

  if(aObj[a[i]] !== undefined)
       return a[i];
  else
     aObj[a[i]] = i;
    }

  return -1;
}

let arr = [2, 3, 3, 1, 5, 2];
console.log(firstDuplicate(arr));
