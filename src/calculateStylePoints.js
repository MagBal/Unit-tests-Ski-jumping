const calculateStylePoints = styleNotes => {
  const max = Math.max.apply(Math, styleNotes);
  const indexOfMax = styleNotes.indexOf(max);
  styleNotes.splice(indexOfMax, 1);

  const min = Math.min.apply(Math, styleNotes);
  const indexOfMin = styleNotes.indexOf(min);
  styleNotes.splice(indexOfMin, 1);

  let sum = 0;
  for (let i = 0; i < styleNotes.length; i++) {
    sum += styleNotes[i];
  }

  return sum;
};

module.exports = calculateStylePoints;