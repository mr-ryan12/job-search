const nextElementInList = (list, value) => {
  const actionIndex = list.indexOf(value);
  const newIndex = (actionIndex + 1) % list.length;

  return list[newIndex];
};

export default nextElementInList;
