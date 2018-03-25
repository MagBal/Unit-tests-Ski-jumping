const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const distPoints = distance - kPoint;

  switch (hillSize) {
    case "normal":
      return 60 + distPoints * 2;
    case "big":
      return 60 + distPoints * 1.8;
    case "mamut":
      return 120 + distPoints * 1.2;
    default:
      return "incorrect data";
  }
};

module.exports = calculateDistancePoints;