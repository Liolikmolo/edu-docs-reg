function isIsogram(str){
    let arr = str.toLowerCase().split('');
    console.log(arr);
    let size = new Set(arr).size;
    if (arr.length == size){
        return true;
    } else {
        return false;
    }

}

console.log(isIsogram("moOse"))