// function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

// Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
//     ...should result in [-1, 1, 3, 9, 15]
function concatOdds(array1,array2){
    let newArray = [];
    let oddArray = [];
    newArray = array1.concat(array2);
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] % 2 !== 0){
            oddArray.indexOf(newArray[i]) === -1?oddArray.push(newArray[i]):null;
        }
    }
    return oddArray.sort((a, b)=>{return a-b});
}
module.exports = concatOdds;