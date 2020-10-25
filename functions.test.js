const functions = require("./functions");

test("is defined", () => {
  expect(functions.getAge("Rudi", 35)).toBeDefined();
});

test("2 + 2 is equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4); //matching, toBe used to test primitive values
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 }); //toEqual, checks objects
});

test("test isNull", () => {
  expect(functions.isNull()).toBeNull();
});

test("test  isUndefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});
//jest allow us to be specific with our matchers to test with detail
//https://jestjs.io/docs/en/using-matchers
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//matchers to numbers

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers ', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
})


test('there is no "I" in team', () => {
    expect('team').not.toMatch(/I/);
})

test('the shopping list has beer on it', () => {
    const shoppingList = ['nappies', 'toillet roll', 'beer'];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
})
test('compile android goes as expected', ()=> {
    expect(functions.compileAndroidCode).toThrow();
    expect(functions.compileAndroidCode).toThrow(/JDK/);
    
} )
