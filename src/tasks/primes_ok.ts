// 👓 https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/tasks

export function getPrimeFactors(startNumber: number): number[] {
  const primeFactors = [];
  const SMALLEST_PRIME = 2;
  let currentFactor = SMALLEST_PRIME;
  let factor = startNumber;
  while (factor >= SMALLEST_PRIME) {
    const isDivisible = factor % currentFactor === 0;
    if (isDivisible) {
      primeFactors.push(currentFactor);
      factor /= currentFactor;
    } else {
      currentFactor++;
    }
    console.log(currentFactor);
  }
  return primeFactors;
}
