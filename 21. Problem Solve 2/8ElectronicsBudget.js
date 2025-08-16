// ElectronicsBudget
function ElectronicsBudget(lapQ, tabQ, mobQ) {
  let laptop = 35000;
  let tablet = 15000;
  let mobile = 20000;

  let totalBudget = laptop * lapQ + tablet * tabQ + mobile * mobQ;
  return totalBudget;
}

let result = ElectronicsBudget(2, 3, 4);
console.log(result);
