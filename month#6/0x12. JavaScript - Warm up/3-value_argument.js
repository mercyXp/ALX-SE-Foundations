const args = process.argv.slice(2); // Get arguments after script name

// Check if first argument exists (without using .length)
if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]); // Print first argument
}


/* ALTERNATIVE SOLUTION
const args = process.argv.slice(2);
console.log(args[0] === undefined ? "No argument" : args[0]);
*/




// node "D:\ALX-SE-Foundations-1\month#6\0x12. JavaScript - Warm up\3-value_argument.js" Hello 