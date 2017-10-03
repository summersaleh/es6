let a = 'hello';

console.log(a);

{
	let a = 'goodbye';
	console.log(a);
}

const array = [1, 2, 3];
array.push(4);
console.log(array);

let d = `hello ${a}`;
console.log(d);

let spread = [7, 8, 9];
let spread2 = [6, ...spread, 10];
console.log(spread2);

function print (a, b, c) {
	console.log(a, b, c);
}

let z = [1, 2, 5];
print(...z);

//can add as many args as you want to this function
function print2 (...s) {
	console.log(s);
}

function butter(...a) {
  console.log(a);
}

let b = [1, 2, 3];
butter(...b, 4, 5, 6);


print2(1, 2, 3);