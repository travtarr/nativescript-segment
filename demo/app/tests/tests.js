var Segment = require("nativescript-segment").Segment;
var segment = new Segment();

describe("greet function", function() {
    it("exists", function() {
        expect(segment.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(segment.greet()).toEqual("Hello, NS");
    });
});