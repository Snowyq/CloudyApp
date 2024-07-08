export function getIconUrl(iconId) {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
}

export function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
