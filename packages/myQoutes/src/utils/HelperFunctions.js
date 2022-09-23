export const AvarageCalculator = (value, divider) => {
  return value / divider;
};

export const HoursCalculator = (min) => {
  const hours = min / 60;
  return hours.toFixed(1);
};
