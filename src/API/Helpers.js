const groupBy = (objectArray, property) => objectArray.reduce((acc, obj) => {
  const key = obj[property];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, []);
export default groupBy;
