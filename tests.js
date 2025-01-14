// Unit tests for the helloWorld function
describe('helloWorld', function() {it('should be a defined function', function() {expect(typeof helloWorld).toBe('function')})
    it('Should return a string when called', function() {expect(typeof helloWorld()).toBe("string")})
    it('Should return the string "Hello, World!" when executed', function() {expect(helloWorld()).toBe("Hello, World!")})
    it("Should never return 'undefined' when called", function() {expect(helloWorld()).not.toBe(undefined);})})
describe('hello', () => {it('should be a defined function', function() {expect(typeof sayHello).toBe('function')})
    it('Should return a string when called', function() {expect(typeof sayHello("")).toBe("string")})
    it('Should return the string "Hello bob" when executed', function() {expect(sayHello("bob")).toBe("Hello bob!")})
    it('Should return the string "Hello jane" when executed', function() {expect(sayHello("jane")).toBe("Hello jane!")})
    it('Should return Hello World! when passed null', function() {expect(sayHello( null)).toBe("Hello World!")})
    it('Should return Hello World! when passed false', function() {expect(sayHello( false)).toBe("Hello World!")})
    it('Should return Hello World! when passed an empty string', function() {expect(sayHello( "")).toBe("Hello World!")})
    it('Should return Hello World! when passed a number', function() {expect(sayHello( 2.3)).toBe("Hello World!")})
    it('Should return Hello World! when passed a number as a string', function() {expect(sayHello( "5")).toBe("Hello World!")})
    it('Should return Hello World! when passed an array', function() {expect(sayHello( [])).toBe("Hello World!")})
    it('Should return Hello World! when passed an object', function() {expect(sayHello( {})).toBe("Hello World!")})
    it('Should return Hello World! when passed a function', function() {expect(sayHello( () => { return 1; })).toBe("Hello World!")})})
describe('isFive', () => {
    it('Should be a defined function', function () {expect(typeof isFive).toBe('function')})
    it('Should return a string when called', function () {expect(typeof isFive("")).toBe("boolean")})
    it('Should return true when passed 5', function () {expect(isFive(5)).toBe(true)})
    it('Should return true when passed "5"', function () {expect(isFive("5")).toBe(true)})
})
describe('isEven', () => {
    it('Should be a defined function', function () {expect(typeof isEven).toBe('function')})
    it('Should return a string when called', function () {expect(typeof isEven("")).toBe("boolean")})
    it('Should return true when passed 2', function () {expect(isEven(2)).toBe(true)})
    it('Should return true when passed -4', function () {expect(isEven(-4)).toBe(true)})
    it('Should return false when passed 3', function () {expect(isEven(3)).toBe(false)})
    it('Should return false when passed banana', function () {expect(isEven("banana")).toBe(false)})
    it('Should return true when passed 8', function () {expect(isEven(8)).toBe(true)})
    it('Should return false when passed Infinity', function () {expect(isEven(Infinity)).toBe(false)})
    it('Should return false when passed a boolean', function () {expect(isEven(true)).toBe(false)})
    it('Should return false when passed nothing', function () {expect(isEven()).toBe(false)})
})
describe('isVowel', () => {
    it('Should be a defined function', function () {expect(typeof isVowel).toBe('function')})
    it('Should return a boolean when called', function () {expect(typeof isVowel("")).toBe("boolean")})
    it('Should return true when passed a', function () {expect(isVowel("a")).toBe(true)})
    it('Should return true when passed A', function () {expect(isVowel("A")).toBe(true)})
    it('Should return false when passed y', function () {expect(isVowel("y")).toBe(false)})
    it('Should return false when passed 4', function () {expect(isVowel(4)).toBe(false)})
    it('Should return false when passed true', function () {expect(isVowel(true)).toBe(false)})
    it('Should return false when passed false', function () {expect(isVowel(false)).toBe(false)})
    it('Should return false when passed banana', function () {expect(isVowel("banana")).toBe(false)})
    it('Should return false when passed nothing', function () {expect(isVowel()).toBe(false)})
})
describe('add', () => {
    it('Should be a defined function', function () {expect(typeof add).toBe('function')})
    it('Should return a number when called', function () {expect(typeof add(0, 0)).toBe("number")})
    it('Should return 5 when passed 2 + 3', function () {expect(add(2, 3)).toBe(5)})
    it('should return -12 when passed -3 and -9', function () {expect(add(-3, -9)).toBe(-12)})
    it('Should return 11 when passed 5 + 6', function () {expect(add("5", 6)).toBe(11)})
    it('Should return 6 when passed -4 + 10', function () {expect(add("-4", "10")).toBe(6)})
    it('Should return nan when passed "banana" and "split"', function () {expect(isNaN(add("banana", "split"))).toBe(true)})
    it('Should return nan when passed 2 and apples', function () {expect(isNaN(add(2, "apples"))).toBe(true)})
    it('Should return nan when passed nothing', function () {expect(isNaN(add())).toBe(true)})
})