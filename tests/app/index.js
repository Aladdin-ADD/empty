"use strict";

const assert = require("assert");
const add = require("../../app/index.js");

describe("add", () => {

    it("1 + 1 === 2", () => {
        assert.equal(add(1, 1), 2);
    });

});
