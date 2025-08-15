// variable , data types 

/*
variable naming convention

01. a-z and A-Z letter use
02. underscore and dollar sign use
03. number use but not start position
04. case sensitive Name and name different
05. not use js reserved word

*/

// string data types
var firstName = "Priyotush";
var lastName = "Paul";

// number data types
var age = 24;
var height = 5.4;

//boolean data types 
var isMarried = false;
var hasDrivingLicense = true;

//undefined
var middleName;


//null
var passportNumber = null;


//bigint
var nationalId = 2353464573473723462;


//array
var friends = ["sondip", "suronjon", "tushar"]


//object
let address = {
    village : "abdur rahimpur",
    post : "suraboi",
    zip : 12432,
}




console.log("First Name : "+firstName);
console.log("Last Name : "+lastName);
console.log("Age : "+age);
console.log("Height : "+ height);

console.log("Married : "+isMarried);
console.log("Driving License : "+hasDrivingLicense);

console.log("Middle Name : "+middleName);
console.log("Passport Number : " +passportNumber);
console.log("National Id : "+nationalId);

console.log("Friends Name : "+ friends);
console.log("Address : "+address.village + " "+ address.post + " " +address.zip);


console.log(typeof firstName);
console.log(typeof isMarried);
console.log(typeof nationalId);
console.log(typeof friends);