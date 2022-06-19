const nextElementInList = <T>(list: T[], value: T): T => {
  const currentValueIndex = list.indexOf(value);
  const nexValueIndex = (currentValueIndex + 1) % list.length;
  const nextValue = list[nexValueIndex];

  return nextValue;
};

export default nextElementInList;
