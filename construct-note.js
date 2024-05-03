// add whatever parameters you deem necessary
// accepts two strings 
// determines if all of the letters of string1 are used to create the message in string2 
function constructNote(str1, str2) {
    if(str2.length === 0) return false;

    const str1Map = freqMap(str1);
    const str2Map = freqMap(str2);

    for(let ltr of str1Map.keys()){
        if(str2Map.get(ltr) < str1Map.get(ltr)) return false;
    }
    return true;
}   

function freqMap(str){
    const freqCounter = new Map();
    for (let ltr of str){
        let valCount = freqCounter.get(ltr) || 0;
        freqCounter.set(ltr, valCount + 1);
    }
    return freqCounter;
}
