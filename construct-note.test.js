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



describe("constructNote", function() {
  it("should return false for empty letters string", function() {
    expect(constructNote("abcd", "")).toBe(false);
  });

  it("should return true for empty message", function() {
    expect(constructNote("", "abc")).toBe(true);
  });

  it("should account for duplicates", function() {
    expect(constructNote("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", function() {
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  it("should return true if all letters contained", function() {
    expect(constructNote("abc", "abcd")).toBe(true);
  });
});
