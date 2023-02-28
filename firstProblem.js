// Question 1:
// Write a program that takes as input an array of positive and negative numbers (0 excluded). The objective is to
// return those items from the array whose sum is 0. If no such items exist return “No Elements found”
// Example: For an input array [-4, 1, 3, -2, -1],
// one of the possible results would be 3, -2, -1 since their sum is 0.


// here the solution -> 

function findZeroSum(arr) {
  const n = arr.length;
  const result = [];

  // Sort the array to allow for efficient two-pointer traversal
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue; // Skip duplicate elements
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++; // Skip duplicate elements
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--; // Skip duplicate elements
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result.length > 0 ? result : "No Elements found";
}

// Example usage and test cases
const arr1 = [-4, 1, 3, -2, -1];
const result1 = findZeroSum(arr1); 
console.log(result1) // [ [ -4, 1, 3 ], [ -2, -1, 3 ] ]

// Time complexity of the solution is O(n^2) in the worst case, where n is the length of the input array.
// The space complexity of the optimized solution is O(n), where n is the length of the input array. This is because we need to store the input array in a hash table, which requires O(n) space in the worst case.
