let a = 5;
let b = 3;
let c = 10;

// Aritméticos FALSE
console.log(a + b === 10); // False
console.log(a - b === 3);  // False (porque 5 - 3 = 2)

// Relacionais FALSE
console.log(a < b && b > a); // False
console.log(a === b);        // False

// Lógicos FALSE
console.log(a < b && b > c); // False
console.log(a + b === c);    // False

// Aritméticos TRUE
console.log(a * b === 15); // True
console.log(a / b === 1.6666666666666667); // True

// Relacionais TRUE
console.log(a >= b); // True    
console.log(a !== b); // True

// Lógicos TRUE
console.log(a > b || b < a); // True
console.log(a + b > 5); // True
