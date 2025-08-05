// function 

// simple function
function sayHello(){
    console.log("Hello World!");
}

sayHello();

// parameter with function
function greet(name){
    console.log("Hello "+name);
}

greet("Priyotush");


// return function 
function add(a,b){
    return a+b;
}

let result = add(5,10);
console.log(result);

// function expression
let multiply = function(a,b){
    return a * b;
}

console.log(multiply(5,2));


// Arrow function 
let square = (n)=>{
    return n*n;
}

console.log(square(5));

// default parameter
function hello(name = "Tushar"){
    console.log("Hi, "+name);
}

hello();


// rest parameter
function sum (...numbers){

    let total = 0;

    for(let num of numbers){
        total += num;
    }
    console.log(total);
}

sum(5,10,20,30,40,50);