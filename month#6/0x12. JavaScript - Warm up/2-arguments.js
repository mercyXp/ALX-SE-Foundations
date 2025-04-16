
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}





//run with "node 2-arguments.js Hello" in the vs code terminal - if not working then.
/*
First, verify the file exists and is in the right location:

Make sure your 2-arguments.js file is saved in:
D:\ALX-SE-Foundations-1\month#6\0x12. JavaScript - Warm up\

Navigate to the correct directory:
In your VS Code terminal:
cd "D:\ALX-SE-Foundations-1\month#6\0x12. JavaScript - Warm up"

Then run the script:
node 2-arguments.js Hello

Alternative Solutions
If you still get the error:

Option 1: Run with the full path
node "D:\ALX-SE-Foundations-1\month#6\0x12. JavaScript - Warm up\2-arguments.js" Hello

Option 2: Check if the file exists
dir "D:\ALX-SE-Foundations-1\month#6\0x12. JavaScript - Warm up\2-arguments.js"
*/