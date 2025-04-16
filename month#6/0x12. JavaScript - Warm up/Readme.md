
---

# JavaScript Warm-Up Tasks (Beginner-Friendly Guide)

## Task 0: First constant, first print ✅

**Objective:**  
Write a script that prints:

```
JavaScript is amazing
```

**Instructions:**
- Create a **constant** named `myVar` and assign the value `"JavaScript is amazing"`.
- Use `console.log(...)` to print the value.
- Do **not** use `var`.

**Example Output:**
```bash
$ ./0-javascript_is_amazing.js
JavaScript is amazing
```

**Filename:** `0-javascript_is_amazing.js`

---

## Task 1: 3 languages ✅

**Objective:**  
Print 3 lines of text using `console.log`:

```
C is fun  
Python is cool  
JavaScript is amazing
```

**Instructions:**
- Use `console.log` for each line.
- Do **not** use `var`.

**Filename:** `1-multi_languages.js`

---

## Task 2: Arguments ✅

**Objective:**  
Print a message based on the number of command-line arguments.

**Instructions:**
- If no argument: print `No argument`
- If one argument: print `Argument found`
- If more than one: print `Arguments found`
- Use `process.argv`
- Do **not** use `var`

**Example Output:**
```bash
$ ./2-arguments.js
No argument

$ ./2-arguments.js Hello
Argument found

$ ./2-arguments.js Hello World
Arguments found
```

**Filename:** `2-arguments.js`

---

## Task 3: Value of my argument ✅

**Objective:**  
Print the **first** argument passed to the script.

**Instructions:**
- If no argument is passed, print `No argument`.
- Do **not** use `var`.
- Do **not** use `.length`.

**Example Output:**
```bash
$ ./3-value_argument.js
No argument

$ ./3-value_argument.js School
School
```

**Filename:** `3-value_argument.js`

---

## Task 4: Create a sentence ✅

**Objective:**  
Print two arguments in the format:

```
<arg1> is <arg2>
```

**Example:**
```bash
$ ./4-concat.js c cool
c is cool

$ ./4-concat.js c
c is undefined
```

**Instructions:**
- Use `console.log(...)`.
- Do **not** use `var`.

**Filename:** `4-concat.js`

---

## Task 5: An Integer ✅

**Objective:**  
Print the argument as an integer.

**Instructions:**
- If it’s a valid number: print `My number: <number>`
- Otherwise, print `Not a number`
- Do **not** use `var` or `try/catch`

**Example Output:**
```bash
$ ./5-to_integer.js 89
My number: 89

$ ./5-to_integer.js School
Not a number
```

**Filename:** `5-to_integer.js`

---

## Task 6: Loop to languages ✅

**Objective:**  
Use a loop to print:

```
C is fun  
Python is cool  
JavaScript is amazing
```

**Instructions:**
- Store these strings in an array.
- Use a `loop` to print them.
- Only one `console.log` per loop.
- No `if/else` and no `var`.

**Filename:** `6-multi_languages_loop.js`

---

## Task 7: I love C ✅

**Objective:**  
Print `"C is fun"` x times where x is a number passed as an argument.

**Instructions:**
- If x is not a number, print `Missing number of occurrences`.
- Use a loop.
- Only 2 `console.log` calls allowed.
- Do **not** use `var`.

**Example Output:**
```bash
$ ./7-multi_c.js 3
C is fun
C is fun
C is fun
```

**Filename:** `7-multi_c.js`

---

## Task 8: Square ✅

**Objective:**  
Print a square using the letter `"X"`.

**Instructions:**
- Size of square is the argument passed.
- If not a number, print `Missing size`.
- Use a loop to print square rows.

**Example Output:**
```bash
$ ./8-square.js 3
XXX
XXX
XXX
```

**Filename:** `8-square.js`

---

## Task 9: Add ✅

**Objective:**  
Add two numbers passed as arguments.

**Instructions:**
- Create a function `add(a, b)` that returns the sum.
- Call this function with the two arguments.
- Print the result using `console.log(...)`.

**Example Output:**
```bash
$ ./9-add.js 3 5
8
```

**Filename:** `9-add.js`

---

## Task 10: Factorial ✅

**Objective:**  
Print the factorial of a number (recursively).

**Instructions:**
- Create a function that returns the factorial.
- Factorial of NaN or missing value is `1`.
- Use recursion.
- Use `console.log(...)`.

**Example Output:**
```bash
$ ./10-factorial.js 4
24

$ ./10-factorial.js
1
```

**Filename:** `10-factorial.js`

---

## Task 11: Second biggest! ✅

**Objective:**  
Print the **second largest** number from the command-line arguments.

**Instructions:**
- If fewer than 2 arguments, print `0`.
- Do **not** use `var`.

**Example Output:**
```bash
$ ./11-second_biggest.js 1 4 2 5
4
```

**Filename:** `11-second_biggest.js`

---

## Task 12: Object ✅

**Objective:**  
Update the value in an object.

**Instructions:**
- Replace the `value` property in the object from `12` to `89`.
- Do **not** use `var`.

**Original Code:**
```js
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
// Your code here
console.log(myObject);
```

**Output:**
```bash
{ type: 'object', value: 12 }
{ type: 'object', value: 89 }
```

**Filename:** `12-object.js`

---

## Task 13: Add file ✅

**Objective:**  
Export a function `add` from a separate file.

**Instructions:**
- File: `13-add.js`
- Export a function named `add(a, b)`
- Used like this:

```js
const add = require('./13-add').add;
console.log(add(3, 5));
```

**Expected Output:**
```bash
$ ./13-main.js
8
```

**Filename:** `13-add.js`

---

