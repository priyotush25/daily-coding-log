function noDuplicate(items) {
  let unique = [];
  for (const item of items) {
    if (unique.includes(item) == false) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(noDuplicate([10, 20, 30, 10, 50, 20, 30, 60]));
