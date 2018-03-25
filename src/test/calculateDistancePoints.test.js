const assert = require("assert");
const calculateDistancePoints = require("../calculateDistancePoints");

describe("calculateDistancePoints", () => {
  it("should return point for normal hill below 60 ", () => {
    const actual = calculateDistancePoints(91.5, "normal", 98);

    const expected = "47";

    assert.equal(actual, expected);
  });

  it("should return point for normal hill above 60", () => {
    const actual = calculateDistancePoints(99.5, "normal", 98);

    const expected = "63";

    assert.equal(actual, expected);
  });

  it("should return point for big hill below 60", () => {
    const actual = calculateDistancePoints(110, "big", 120);

    const expected = "42";

    assert.equal(actual, expected);
  });

  it("should return point for big hill above 60", () => {
    const actual = calculateDistancePoints(134, "big", 120);

    const expected = "85.2";

    assert.equal(actual, expected);
  });

  it("should return point for mamut hill below 120 ", () => {
    const actual = calculateDistancePoints(198, "mamut", 200);

    const expected = "117.6";

    assert.equal(actual, expected);
  });

  it("should return point for mamut hill above 120", () => {
    const actual = calculateDistancePoints(227.5, "mamut", 200);

    const expected = "153";

    assert.equal(actual, expected);
  });

  it("should return 'incorrect data' if incorrect parameter name is given", () => {
    const actual = calculateDistancePoints(91.5, "hill", 98);

    const expected = "incorrect data";

    assert.equal(actual, expected);
  });
});
