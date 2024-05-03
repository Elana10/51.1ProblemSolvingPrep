// add whatever parameters you deem necessary
// accepts two arrays, one of keys, and one of values
// returns an object with keys: value 
//- ignoring extra values and assigning null to extra keys 
function twoArrayObject(keyArr, valArr) {
    const obj = {}
  
    for(let i = 0; i < keyArr.length; i++){
        obj[keyArr[i]] = valArr[i] || null
    }
    return obj;
  }