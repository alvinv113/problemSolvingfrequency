const input1 = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

function removeDuplicate(arr) {
    let length = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            arr[length] = arr[i];
            length++;
        }
    }
    
    // the last element is not a duplicate
    if (!tmp[arr[arr.length-1]]) {
        length--;
    }
    arr.length = length;
    return arr;
}

console.log(removeDuplicate(input1));



  

