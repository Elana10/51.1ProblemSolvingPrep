function twoArrayObject(keyArr, valArr) {
  const obj = {}

  for(let i = 0; i < keyArr.length; i++){
      obj[keyArr[i]] = valArr[i] || null
  }
  return obj;
}


describe("twoArrayObject", function() {
  it("makes an object of keys and values", function() {
    expect(twoArrayObject(["a", "b", "c"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3
    });
  });

  it("ignores extra values", function() {
    expect(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])).toEqual({
      a: 1,
      b: 2,
      c: 3
    });
  });

  it("sets values for extra keys to null", function() {
    expect(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: null
    });
  });
});
