function linearSearch(data, target){
    for(let i = 0; i < data.length; i++){
        if(data[i] === target){
            return true;
        }
    }
    return false;
}

const value =  [4,2,1,7,6,4,8,0,9]
const target1 = 3; // result false
const target2 = 6; // result true

console.log(linearSearch(value, target2));