export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function brandValue(brand) {
  switch (brand) {
    case 'european':
      return 0.3;
    case 'american':
      return 0.15;
    case 'asian':
      return 0.05
    default:
      return 0
  }
}
export function typeValue(type) {
  return type === 'basic' ? 0.2 : 0.5;
}

export function pascalCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
