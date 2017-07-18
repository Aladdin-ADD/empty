const assert = require("assert");
const add = require("../../lib/index.js");

describe("add", () => {

    it("1 + 1 === 2", () => {
        assert.equal(add(1, 1), 2);
    });

});
