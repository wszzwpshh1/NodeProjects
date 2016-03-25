describe("Hello world", function () {
    var Hello = require("../js/Hello");
    var hello;

    beforeEach(function () {
        hello = new Hello();
        //this.addMatchers({
        //    toContainWorld: function () {
        //        return (this.actual.indexOf("World") !== -1);
        //    }
        //});
    });
    it("should return hello statement", function () {
        expect(hello.helloWorld()).toEqual("Hello, World!");
        expect(hello.helloWorld()).toBe("Hello, World!");
    });

    //it("should contain word 'World'", function () {
    //    expect(Hello()).toContainWorld();
    //});
});

describe("Hello", function () {
    var Hello = require("../js/Hello");
    var hello;

    beforeEach(function () {
        hello = new Hello();
    });

    it("calls the sayHello() function", function () {
        spyOn(hello, "sayHello");
        hello.helloSomeone("fakee");
        expect(hello.sayHello).toHaveBeenCalled();
        expect(hello.sayHello).toHaveBeenCalledTimes(1);
    });
    it("greet the 'World'", function () {
        spyOn(hello, "helloSomeone");
        hello.helloSomeone("World");
        expect(hello.helloSomeone).toHaveBeenCalledWith("World");
        expect(hello.helloSomeone).not.toHaveBeenCalledWith("world");
    });
    it("calls the fake sayHello()", function () {
        //hello.sayHello = jasmine.createSpy("'say hello' spy").andReturn("nihao");
        //hello.sayHello = jasmine.createSpy("'say hello' spy").andCallFake(function(){
        //    return "boujour";
        //});

        hello.sayHello = jasmine.createSpy("'say hello' spy");
        hello.helloSomeone("world");
        expect(hello.sayHello).toHaveBeenCalled();
    });
});