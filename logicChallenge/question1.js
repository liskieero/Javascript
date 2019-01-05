// question 1
const arrayOrg = (arr) => {
    // sort array
    arr.sort(function(a,b){return a-b;});
    arrLength = arr.length;
    // create empty result array
    let resultArray = [];
    // loop through the input array
    for (let i = 0; i < arrLength; i++) {
        let j;
        /*if equal consecutive values are found
        go through the values and push a subarray
        of equal values to the resultArray. Else
        push the original value.*/
        if (arr[i] === arr[i+1]) {
            j = i;
            while (arr[j] === arr[j+1]) {
                j = j + 1;
            }
            resultArray.push(arr.slice(i,j+1));
            i = j;
        } else {
            resultArray.push(arr[i]);
        }
   }
   console.log("resutArray", resultArray);
   return resultArray;
}

demoArray = [1,1,1,10,4,2,20,2,10,10,10,1];
arrayOrg(demoArray);



///////////////////////////////////////////////////////////////////

/*question 1 bonus - helper function
function that finds equal elements and combines them to a subarray*/
const arraySort = (arr) => {

    const arrLength = arr.length;
    // create empty result array
    let result = [];

    // loop through the input array
    for (let i = 0; i < arrLength; i++) {
        let j;
        /*if equal consecutive values are found
        go through the values and push a subarray
        of equal values to the resultArray. Else
        push the original value.*/
        if (arr[i] === arr[i+1]) {
            j = i;
            while (arr[j] === arr[j+1] && j < arrLength) {
                j = j + 1;
            }
            result.push(arr.slice(i,j+1));
            i = j;
        } else {
            result.push(arr[i]);
        }
   }
   return result;
}


// question 1 bonus - main code
const arrayOrgBonus = (arr) => {

    // emtpy arrays that are filled
    let subArray1 = [];
    let subArray2 = [];

    for (item of arr) {
        typeof(item) === "number" ?
            subArray1.push(item) :
            subArray2.push(item);
    }
    subArray1.sort(function(a,b) {return a-b;});
    subArray2.sort();

    // do "subarray" sorting
    let resultSubArray1 = arraySort(subArray1);
    let resultSubArray2 = arraySort(subArray2);

    // combine two subarrays
    return resultSubArray1.concat(resultSubArray2);
}

demoArray = [1,1,1,10,4,2,20,2,10,10,10,1,"2","2","1","3","1"];
arrayOrgBonus(demoArray);



