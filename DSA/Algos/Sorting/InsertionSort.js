function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j;
        for(j = i - 1; j < arr.length && arr[j] > current; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

const data = [7,4,5,3,9,6,2,0,1];
console.log(insertionSort(data));