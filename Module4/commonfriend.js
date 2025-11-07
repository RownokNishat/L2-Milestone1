const usersA = [];
const usersB = [];

for (let i = 0; i < 50000; i++) {
  usersA.push({ id: i, name: `user${i}` });
  usersB.push({ id: i + 25000, name: `user${i + 25000}` });
}
const commonfriends = () => {
  const startTime = performance.now();
  const usersAIdset = new Set(
    usersA.map((userA) => {
      return userA.id;
    })
  );
  let counter = 0;
  usersB.forEach((userB) => {
    if (usersAIdset.has(userB.id)) {
      counter++;
    }
  });
  const endTime = performance.now();
  return { counter, timeTook: endTime - startTime };
};
console.log(commonfriends());
