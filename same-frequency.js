// add whatever parameters you deem necessary
//accepts two positive integers
//determines if the number frequency is the same
function sameFrequency(int1, int2) {
    const numMap1 = freqMapping(int1.toString())
    const numMap2 = freqMapping(int2.toString())

    if(numMap1.size !== numMap2.size) return false;

    for(let num of numMap1.keys()){
        if( numMap2.get(num) !== numMap1.get(num)) return false;
    }
    return true;
}


function freqMapping(str){
    const freqMap = new Map();

    for (let n of str){
        let valCount = freqMap.get(n) || 0;
        freqMap.set(n, valCount +1)
    }
    return freqMap;
}