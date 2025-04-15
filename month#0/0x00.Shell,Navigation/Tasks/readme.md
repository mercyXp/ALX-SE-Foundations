
---

# 🐚 Shell Navigation Basics – Task Walkthrough

Welcome to your first hands-on project with the Unix Shell! In this guide, we’ll go through several basic file operations using the terminal. You’ll be working in a Linux environment (Ubuntu 20.04), and we recommend using **VS Code** for an efficient experience.

> ✅ **Environment:** Ubuntu 20.04 (via WSL, Remote SSH, or any terminal with Bash)  
> 💻 **Recommended Tool:** Visual Studio Code + built-in terminal

---

## 📁 Task 0: Create Me!

**Objective:**  
Navigate to the `/root` directory and create an empty file named `so_cool`.

**Steps:**
```bash
cd /root
touch so_cool
ls
```

---

## 📁 Task 1: More of Me

**Objective:**  
Copy the file `school` from `/root` to the `/tmp` directory.

**Steps:**
```bash
cd /root
cp school /tmp
ls /tmp
```

---

## 📁 Task 2: To Old

**Objective:**  
Rename the file `old_school` to `new_school` in the same directory.

**Steps:**
```bash
cd /root
mv old_school new_school
ls
```

---

## 📁 Task 3: Not Here

**Objective:**  
Move the file `not_here` to `/tmp/right_school`.

**Steps:**
```bash
cd /root
mv not_here /tmp/right_school
ls /tmp
```

---

## 📁 Task 4: Not Anymore

**Objective:**  
Delete the file `ready_to_be_removed` in `/root`.

**Steps:**
```bash
cd /root
rm ready_to_be_removed
ls
```

---

## 📁 Task 5: Organization is Key!

**Objective:**  
Create a directory named `school_is_amazing` inside `/root`.

**Steps:**
```bash
cd /root
mkdir school_is_amazing
ls -d */
```

---

## 📁 Task 6: No Need

**Objective:**  
Remove a directory named `empty_directory` from `/root`.

**Steps:**
```bash
cd /root
rmdir empty_directory
ls -d */
```

---

## 🔚 Wrap-up

Congratulations! You’ve just practiced key file system navigation and file management skills in the Unix Shell. These basics form the foundation for everything you’ll do moving forward in software development.

Feel free to share your journey or ask questions via [issues](https://github.com/) on this repo! 🌱

---

