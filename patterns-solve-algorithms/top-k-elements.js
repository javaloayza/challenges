function findTopK(nums, k) {
  return nums.sort((a, b) => b - a).slice(0, k); // Ordenar y tomar los primeros k
}

console.log(findTopK([3, 1, 5, 12, 2, 11], 3)); // [12, 11, 5]

