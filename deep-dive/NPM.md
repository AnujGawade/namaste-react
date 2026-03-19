# NPM (Node Package Manager)

## What is NPM?

- **NPM = Node Package Manager (common usage)**
- Technically, it **does not officially stand for anything anymore**
- It is:
  - A **package manager**
  - A **repository (registry) of packages**
  - A **tool for managing dependencies in Node.js projects**

---

## Why NPM is Important?

- Provides access to **millions of open-source libraries**
- Helps developers:
  - Install packages easily
  - Manage dependencies
  - Share reusable code
- Used in almost every **Node.js / React / Angular / Full-stack project**

---

## What NPM Consists Of

### 1. NPM Registry

- A **central database** of all packages
- Hosted at: https://www.npmjs.com
- Example packages:
  - `react`
  - `lodash`
  - `express`

---

### 2. NPM CLI (Command Line Interface)

- Tool used to interact with NPM
- Comes installed with **Node.js**

Example:

```bash
npm install react
```

---

### 3. package.json

- A configuration file for your project
- Contains:
  - Project metadata
  - Dependencies
  - Scripts

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

---

## Key Concepts

### 🔹 Package

- A reusable piece of code
- Published to NPM registry

---

### 🔹 Dependency

- Packages your project depends on

Types:

- `dependencies` → required in production
- `devDependencies` → required only for development

---

### 🔹 node_modules

- Folder where all installed packages are stored

---

### 🔹 package-lock.json

- Locks exact versions of dependencies
- Ensures consistent installs across environments

---

## Common NPM Commands

### Install a package

```bash
npm install package-name
```

---

### Install as dev dependency

```bash
npm install package-name --save-dev
```

---

### Install all dependencies

```bash
npm install
```

---

### Remove a package

```bash
npm uninstall package-name
```

---

### Update a package

```bash
npm update package-name
```

---

### Run scripts

```bash
npm run start
npm run build
```

---

## Versioning (SemVer)

Format:

```
MAJOR.MINOR.PATCH
```

Example:

```
^1.2.3
```

- `^` → allows minor + patch updates
- `~` → allows only patch updates

---

## 📌 Important Notes

- NPM **manages packages**, but:
  - It is also a **registry + CLI tool**
- It does **not strictly stand for "Node Package Manager"**
- It is the **largest software registry in the world**

---

## ⚡ Pro Tips

- Use `npx` to run packages without installing:

```bash
npx create-react-app my-app
```

- Delete `node_modules` + reinstall if facing issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

---
