const nextElementInList = (list, value) => {
  const actionIndex = list.indexOf(value);
  const newIndex = (actionIndex + 1) % 4;

  return list[newIndex];
};

export default nextElementInList;
