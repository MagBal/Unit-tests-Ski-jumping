const assert = require("assert");
const calculateTotalPoints = require("../calculateTotalPoints");

describe("calculateTotalPoints", () => {
  it("should return total points 132", () => {
    const actual = calculateTotalPoints(111, "normal", 98, [19, 19.5, 19, 19, 19], 3, -14);

    const expected = "132";

    assert.equal(actual, expected);
  });
});