/** 
 * Variable
 */

let name = "Mueid";
let age = 30;
let height = 5.9;

console.log(`My name is ${name}`);
console.log(`My age is ${age}`);
console.log(`My height is ${height}`);

console.log(typeof height);

let forSale = true;
let houseNo = 10;
let sellingPlace = "Uttara";

document.getElementById('p1').textContent = `The house is for sale: ${forSale}`;
document.getElementById('p2').textContent = `House no: ${houseNo}`;
document.getElementById('p3').textContent = `Selling place: ${sellingPlace}`;

/**
 * Operator
 */

let x = 2;
let y = 3;

console.log(x + y);
console.log(x * y);
console.log(x ** y); // x^y

/**
 * User input
 */

// user prompt
let username;
username = window.prompt("What's your username?");

// html textbox
let username2;

document.getElementById("mySubmit").onclick = function() {
    username2 = document.getElementById("myText").value;
    document.getElementById("myH2").textContent = `Hello ${username2}`;
}

/**
 * Type conversion
 */

let a = "Pizza";
let b = "Pizza";
let c = "Pizza";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// -------------------------------

let p = "0";
let q = "0";
let r = "0";

p = Number(p);
q = String(q);
r = Boolean(r);

console.log(p, typeof p);
console.log(q, typeof q);
console.log(r, typeof r);

// -------------------------------

let d = "";
let e = "";
let f = "";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);

// -------------------------------

let g;
let h;
let i;

g = Number(g);
h = String(h);
i = Boolean(i);

console.log(g, typeof g);
console.log(h, typeof h);
console.log(i, typeof i);