const dataCache = new Map();
const expensiveTask = (id) => {
  console.log("ran the expensive task for:", id);
  return {
    id: id,
    data: `some data for id:${id}`,
    timestamp: new Date().getTime(),
  };
};
const getData = (id) => {
  const data = expensiveTask(id);
  dataCache.set(id,data);
  return data
};
