function analyzeArray(arr){
    
    const sum = arr.reduce((partialSum,a)=> partialSum+a, 0);
    const length = arr.length;
    const average = sum/length;
    const max = Math.max.apply(null, arr);
    const min = Math.min.apply(null, arr);
    
    return {"average":average, "min":min, "max":max, "length":length}

}

console.log(analyzeArray([1,2,-3,-9]))

module.exports = analyzeArray;