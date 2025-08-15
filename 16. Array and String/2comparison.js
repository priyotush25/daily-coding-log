// 16_2 String Comparison lowercase uppercase and trip

// toLowerCase()
// toUpperCase()
// trim()

let readSubject = "English";
let examSubject = "english  ";

let subject1 = readSubject.toLocaleLowerCase().trim();
let subject2 = examSubject.toLocaleLowerCase().trim();

if (subject1 == subject2) {
  console.log("best exam preparation");
} else {
  console.log("bad exam preparation");
}
