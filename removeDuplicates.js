let arr = [1,2,3,4,23,1,3,5,3,5,3,2,4,5,7,9,8,6,45];

// let news = [...new Set(arr)];
console.log(news)
  
function removeDuplicates(arr) {
    let unique = [];
    console.log(unique)
    for (i = 0; i < arr.length; i++) {
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));
