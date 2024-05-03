
function isSubsequence(str1, str2) {
  let str1Idx = 0;
  let str2Idx = 0;
  if (!str1) return true;
  while (str2Idx < str2.length){
      if(str2[str2Idx] === str1[str1Idx]){
          str1Idx +=1;
      }
      if (str1Idx === str1.length) return true;
      str2Idx += 1;

  }
  return false;
}

describe("isSubsequence", function() {
  it("should return true if the first string is a substring of the second", function() {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  it("should return false if the first string is not a substring of the second", function() {
    expect(isSubsequence("abc", "acb")).toBe(false);
    expect(isSubsequence("notasubstring", "banana")).toBe(false);
    expect(isSubsequence("almost", "almossssss")).toBe(false);
  });
});
