// add whatever parameters you deem necessary
// accepts sorted array of integers and target average 

function averagePair(intArr, avg) {
    let left = 0;
    let right = intArr.length - 1;

    while (left < right){
        let currentAvg = (intArr[left] + intArr[right]) / 2;
        if(currentAvg === avg) return true;
        else if (currentAvg > avg){
            right --;
        } else {
            left ++;
        }
    }
    return false;
}
