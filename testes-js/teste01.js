function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum +  num ** 2, 0)
}
console.log(squareSum([1,2,2]))