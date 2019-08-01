export const normilizeTimeValue = timeValue =>
  timeValue.toString().length === 2 ? timeValue : `0${timeValue}`;
