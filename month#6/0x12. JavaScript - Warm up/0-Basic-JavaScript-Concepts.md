
---

# 📘 JavaScript Programming Fundamentals

## 🌟 Why JavaScript Programming is Amazing

- JavaScript is **versatile** – it runs on both client-side (browser) and server-side (Node.js).
- It's the **language of the web**, powering interactivity and dynamic behavior on websites.
- Huge ecosystem with libraries like **React, Vue, Angular**, and back-end tools like **Express**.
- Easy to start but powerful enough for complex applications.

---

## 🖥️ How to Run a JavaScript Script

### In the browser:
1. Open developer tools (`F12` or right-click → Inspect → Console).
2. Type or paste JS code directly into the **Console**.

### Using Node.js:
1. Install Node.js from [https://nodejs.org](https://nodejs.org).
2. Save your script in a file, e.g., `script.js`.
3. Run in terminal:
   ```bash
   node script.js
   ```

---

## 📝 How to Create Variables and Constants

```js
let x = 5;        // A variable
const y = 10;     // A constant
```

---

## 🔁 Differences Between `var`, `let`, and `const`

| Keyword | Scope      | Can be Reassigned | Hoisting |
|--------|------------|-------------------|----------|
| `var`  | Function    | ✅ Yes            | ✅ Yes (undefined) |
| `let`  | Block       | ✅ Yes            | 🚫 No |
| `const`| Block       | ❌ No             | 🚫 No |

---

## 🔢 Data Types in JavaScript

- **Primitive types**:  
  `Number`, `String`, `Boolean`, `undefined`, `null`, `BigInt`, `Symbol`

- **Non-primitive**:  
  `Object`, `Array`, `Function`

```js
let name = "Alice";           // String
let age = 25;                 // Number
let isStudent = true;         // Boolean
let list = [1, 2, 3];         // Array (Object)
let person = { name: "Bob" }; // Object
```

---

## 🔀 `if`, `if...else` Statements

```js
if (score > 90) {
  console.log("Excellent!");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

## 💬 Comments in JavaScript

```js
// Single-line comment

/*
Multi-line
comment
*/
```

---

## 🔁 Assigning Values to Variables

```js
let language = "JavaScript";
const year = 2025;
```

---

## 🔄 `while` and `for` Loops

### `while` Loop
```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

### `for` Loop
```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

---

## ⛔ `break` and `continue` Statements

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;     // Exit loop when i is 3
  if (i === 1) continue;  // Skip iteration when i is 1
  console.log(i);
}
```

---

## 🛠️ Functions

```js
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Alice")); // Hello Alice
```

---

## ❓ Function Without `return`

If no `return` is used, the function returns `undefined` by default.

```js
function sayHello() {
  console.log("Hi!");
}

let result = sayHello(); // Logs "Hi!", but result is undefined
```

---

## 📦 Scope of Variables

- **Global**: Accessible everywhere.
- **Function**: Only inside the function.
- **Block** (`let`/`const`): Only inside `{ }` block.

```js
let globalVar = "I’m global";

function testScope() {
  let localVar = "I’m local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

console.log(localVar); // ❌ Error
```

---

## ➕ Arithmetic Operators

| Operator | Description       | Example (`a = 10, b = 5`) |
|----------|-------------------|---------------------------|
| `+`      | Addition           | `a + b` → `15`            |
| `-`      | Subtraction        | `a - b` → `5`             |
| `*`      | Multiplication     | `a * b` → `50`            |
| `/`      | Division           | `a / b` → `2`             |
| `%`      | Modulus (Remainder)| `a % b` → `0`             |
| `**`     | Exponentiation     | `a ** b` → `100000`       |

---

## 🗂️ Manipulating Dictionaries (Objects)

```js
let person = {
  name: "Alice",
  age: 25
};

console.log(person.name);    // Access
person.age = 26;             // Modify
person.city = "Nairobi";     // Add
delete person.age;           // Delete
```

---

## 📥 How to Import a File (in Node.js)

### Exporting from `utils.js`:
```js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

### Importing in `main.js`:
```js
const { add } = require('./utils');
console.log(add(2, 3)); // 5
```

---

