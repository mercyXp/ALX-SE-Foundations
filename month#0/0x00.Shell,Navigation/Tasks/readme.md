# 🐚 Shell Navigation Basics – Task Walkthrough

Welcome to your first hands-on project with the Unix Shell! In this guide, you’ll go through several basic file operations using the terminal. You’ll be working in a Linux environment (Ubuntu 20.04), and we recommend using **VS Code** for an efficient experience.

> ✅ **Environment:** Ubuntu 20.04 (via WSL, Remote SSH, or any terminal with Bash)  
> 💻 **Recommended Tool:** Visual Studio Code + built-in terminal

---

## 📁 Task 0: Create Me!

**Objective:**  
Navigate to the `/root` directory and create an empty file named `so_cool`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Open your terminal in VS Code.
2. Navigate to the `/root` directory:  
   `cd /root`
3. Create the file using `touch`:  
   `touch so_cool`
4. List the files to confirm creation:  
   `ls`
</details>

---

## 📁 Task 1: More of Me

**Objective:**  
Copy the file `school` from `/root` to the `/tmp` directory.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to the `/root` directory:  
   `cd /root`
2. Copy the file using `cp`:  
   `cp school /tmp`
3. List the `/tmp` directory to verify:  
   `ls /tmp`
</details>

---

## 📁 Task 2: To Old

**Objective:**  
Rename the file `old_school` to `new_school`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to `/root`:  
   `cd /root`
2. Rename the file using `mv`:  
   `mv old_school new_school`
3. List the contents to confirm:  
   `ls`
</details>

---

## 📁 Task 3: Not Here

**Objective:**  
Move the file `not_here` to `/tmp/right_school`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to `/root`:  
   `cd /root`
2. Move the file using `mv`:  
   `mv not_here /tmp/right_school`
3. Confirm by listing contents of `/tmp`:  
   `ls /tmp`
</details>

---

## 📁 Task 4: Not Anymore

**Objective:**  
Delete the file `ready_to_be_removed`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to `/root`:  
   `cd /root`
2. Remove the file using `rm`:  
   `rm ready_to_be_removed`
3. Confirm by listing files:  
   `ls`
</details>

---

## 📁 Task 5: Organization is Key!

**Objective:**  
Create a directory named `school_is_amazing`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to `/root`:  
   `cd /root`
2. Create the directory using `mkdir`:  
   `mkdir school_is_amazing`
3. List directories to confirm:  
   `ls -d */`
</details>

---

## 📁 Task 6: No Need

**Objective:**  
Remove a directory named `empty_directory`.

<details>
  <summary>🔎 Click here for steps</summary>

1. Navigate to `/root`:  
   `cd /root`
2. Remove the directory using `rmdir`:  
   `rmdir empty_directory`
3. Confirm with:  
   `ls -d */`
</details>

---

## 🙌 Final Thoughts

Congrats on completing your shell navigation exercise! You've practiced:

- Navigating directories  
- Creating and deleting files and directories  
- Copying and moving files  
- Basic Unix commands

---

