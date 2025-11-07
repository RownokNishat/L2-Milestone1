/**
 * Generates a set of unique random numbers within a specific range.
 * @param {number} count - The desired number of unique elements (e.g., 1000).
 * @param {number} max - The exclusive upper bound for the random numbers.
 * @returns {number[]} An array of unique random numbers.
 */
function generateUniqueFromRange(count, max) {
  // Check if the request is possible
  if (max < count) {
    throw new Error(
      "Cannot generate " +
        count +
        " unique numbers from a range of 0 to " +
        (max - 1)
    );
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max);
    uniqueNumbers.add(randomNumber); // Set automatically ignores duplicates
  }

  // Convert the Set back to an Array
  return Array.from(uniqueNumbers);
}

// --- Example Usage ---
// Get 1000 unique numbers between 0 and 999,999
const myUniqueNumbers2 = [
  53, 702, 811, 40, 963, 175, 622, 190, 895, 244, 478, 929, 650, 112, 38, 777,
  421, 589, 290, 834, 615, 95, 333, 740, 508, 167, 982, 603, 440, 858, 219, 726,
  391, 554, 1000, 82, 673, 917, 345, 761, 529, 9, 690, 876, 497, 14, 638, 792,
  309, 570, 943, 230, 411, 847, 665, 136, 362, 718, 904, 581, 27, 483, 755, 61,
  800, 317, 970, 542, 266, 783, 199, 465, 824, 641, 377, 93, 596, 128, 404, 888,
  709, 325, 951, 684, 153, 517, 869, 237, 73, 456, 995, 208, 600, 184, 350, 922,
  251,
];

const checkTwoSum = (arr, num) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; i <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === num) {
        return [i, j];
      }
    }
  }
  return undefined;
};

const checkTwoSumfast = (arr, num) => {
  let sumMap = new Map();

  for (let i = 0; i <= arr.length - 1; i++) {
    if (sumMap.has(num - arr[i])) {
      return [i, sumMap.get(num - arr[i])];
    } else {
      sumMap.set(arr[i], i);
    }
  }
};
const startTime = performance.now();

console.log(checkTwoSum(myUniqueNumbers2, 199));
const endTime = performance.now();
console.log(endTime - startTime);
