function heapSort(arr){
    const n = arr.length
    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(arr, n, i);
    }

    for(let i = n - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i){
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest);
    }
}

function binarySearch(data, target){
    const sortedData = heapSort(data);    
    let left = 0;
    let right = sortedData.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target === sortedData[mid]){
            return true;
        }

        if(target < sortedData[mid]){
            right = mid - 1;
        }

        if(target > sortedData[mid]){
            left = mid + 1;
        }
    }
    return false;
}

const data = [6,5,7,4,8,3,9,2,0,1];
console.log(binarySearch(data, 2));