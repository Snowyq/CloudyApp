export function getIconUrl(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
}

export function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function calculatePointsOnCircle({
  pointsNum,
  width,
  outerRadius,
  innerRadius = outerRadius,
  initialDeg,
}) {
  const radius = outerRadius - (outerRadius - innerRadius);

  const degBetweenPoints = 360 / pointsNum;
  let currDeg = 0;
  if (initialDeg) currDeg = initialDeg;
  let points = [];
  for (let i = 0; i < pointsNum; i++) {
    // if (currDeg > 360) return;
    const sin = Math.sin((currDeg * Math.PI) / 180);
    const cos = Math.cos((currDeg * Math.PI) / 180);
    const mathY = cos * radius;
    const y = mathY + outerRadius;
    const mathX = sin * radius;
    const x = mathX + outerRadius;
    const point = {
      x: x.toFixed(2) - width / 2,
      y: y.toFixed(2),
      deg: currDeg.toFixed(0),
    };
    points.push(point);
    currDeg += degBetweenPoints;
  }
  return points;
}

export function convertMsToKmh(speedInMs) {
  return speedInMs * 3.6;
}
