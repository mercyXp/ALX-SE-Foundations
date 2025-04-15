
---

## ⚙️ Environment Setup Guide (Ubuntu 20.04 + VS Code)

This setup ensures you're working in a clean, sandbox-like Linux environment that mimics the structure used in ALX projects — especially having access to a `root` directory to practice shell commands.

---

### 🧰 Requirements

- **Visual Studio Code**  
- **Windows Subsystem for Linux (WSL2)** OR a remote Linux server via **SSH**
- **Ubuntu 20.04** installed via WSL or as your SSH target

---

## 🛠️ 1. Install WSL and Ubuntu 20.04 (for Windows Users)

### ➤ Step 1: Enable WSL
Open PowerShell as Administrator and run:
```powershell
wsl --install
```

> If you already have WSL1, upgrade it:
```powershell
wsl --set-version Ubuntu-20.04 2
```

### ➤ Step 2: Install Ubuntu 20.04
From the [Microsoft Store](https://aka.ms/wslstore), install **Ubuntu 20.04**.

---

## 🛠️ 2. Set Up Your Root Folder

By default, in WSL you don't have access to the real `/root` unless you're the root user. But you can **simulate** a `root` directory in your home folder for safe experimentation.

### ✅ Option A: Simulate `/root` (Recommended)
```bash
cd ~
mkdir root
cd root
```

> You’ll now work inside `~/root` instead of the system root.

### ✅ Option B: Use Real `/root` (Advanced)
Switch to the root user (if you're comfortable):
```bash
sudo -i
cd /root
```

> ⚠️ Be cautious — this gives full system privileges. Only use this if you know what you're doing.

---

## 🛠️ 3. Open the Environment in VS Code

### ➤ Step 1: Install the **Remote - WSL** extension
Install this from the VS Code extensions panel.

### ➤ Step 2: Launch Ubuntu via VS Code
In VS Code, press `Ctrl+Shift+P`, then type:
```
Remote-WSL: New Window
```

This opens a Linux-backed workspace in your Ubuntu 20.04 terminal.

### ➤ Step 3: Navigate to Your Root Folder
```bash
cd ~/root
```

> You can now run shell commands here exactly as shown in the ALX projects.

---

## 🧪 Verify It's Working

Try running:
```bash
touch testfile
ls
```

If `testfile` appears, you're good to go!

---

## 📁 Optional: Create Some Practice Files

```bash
touch school old_school not_here ready_to_be_removed
mkdir empty_directory
```

These will help when testing the tasks like copying, renaming, moving, and deleting.

---

## 🚀 You're Ready!

You now have a proper environment with Ubuntu 20.04 and a sandbox-like `root` folder to run all your shell projects from VS Code. Happy hacking! 💻🐧

---

