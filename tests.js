// helloWorld tests
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//sayHello tests
describe('sayHello', function (){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
})

// isFive tests
describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive(5)).toBe('boolean');
        expect(typeof isFive(-5)).toBe('boolean');
    });
    it('return true for 5 ', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true for "5"', function () {
        expect(isFive('5')).toBe(true);
    });
})

// isEven tests
describe('isEven', function () {
    
});