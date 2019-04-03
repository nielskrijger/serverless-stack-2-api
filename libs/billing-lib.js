export function calculateCost(storage) {
  let rate = 4;
  if (storage > 10) {
    rate = 2
  }
  if (storage > 100) {
    rate = 1;
  }

  return rate * storage * 100;
}
