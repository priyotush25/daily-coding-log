// 21-3 Use add and multiplication to calculate wood requirements

function woodQuantity(chairQty, tableQty, bedQty) {
  let perChair = 3;
  let perTable = 10;
  let perBed = 50;

  const totalChairWood = perChair * chairQty;
  const totalTableWood = perTable * tableQty;
  const totalBedWood = perBed * bedQty;

  let totalWood = totalChairWood + totalTableWood + totalBedWood;

  return totalWood;
}

console.log(woodQuantity(5, 3, 2));
