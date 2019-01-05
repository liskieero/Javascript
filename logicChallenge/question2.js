// question 2
const addToTarget = (arr, target) => {

    let arrLength = arr.length;
    let arrSum;

    for (let i=0; i < arrLength-1; i++) {
        for (let j=i+1; j < arrLength; j++) {
            arrSum = arr[i] + arr[j];
            if (arrSum === target && arr[i] != arr[j]) {
                return [arr[i], arr[j]];
            }
        }
    }
    return `Could not find two unique values in the array that add up to ${target}`
}

demoArray = [1,2,2,4];
addToTarget(demoArray, 6);
