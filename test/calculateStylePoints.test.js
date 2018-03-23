const assert = require("assert");
const calculateStylePoints = require("../calculateStylePoints");

describe("calculateStylePoints", () => {
  it("should return 55 points", () => {
    const actual = calculateStylePoints([17, 18.5, 17.5, 19, 19.5]);

    const expected = 55;

    assert.equal(actual, expected);
  });

  it("should return 48 points when style points repeat", () => {
    const actual = calculateStylePoints([17, 17, 17, 14, 14]);

    const expected = 48;

    assert.equal(actual, expected);
  });
});
