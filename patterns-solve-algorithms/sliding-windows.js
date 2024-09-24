function maxSubArraySum(arr, k) {
  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i]; // Agrega el siguiente número

    if (i >= k - 1) { // Cuando la ventana alcanza el tamaño k
      maxSum = Math.max(maxSum, windowSum); // Actualiza el máximo
      windowSum -= arr[i - (k - 1)]; // Resta el elemento que sale de la ventana
    }
  }

  return maxSum;
}

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // 9