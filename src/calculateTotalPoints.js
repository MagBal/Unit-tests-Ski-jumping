const calculateDistancePoints = require('./calculateDistancePoints.js');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
	
	const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
	const stylePoints = calculateStylePoints(styleNotes);
	
	return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;