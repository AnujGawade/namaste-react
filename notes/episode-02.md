# 📦 Part 1 – NPM

If you want to dive deep into NPM, check the **deep-dive folder**. It contains detailed explanations about NPM.

---

## Goal

We will learn how to create a **production build of React**, similar to:

```bash
npx create-react-app my-app
```

---

## package.json

When you run:

```bash
npm init
```

and fill in the details, a **package.json** file is created.

### 👉 package.json is a configuration file for NPM

---

## ❓ Why Do We Need package.json?

- NPM manages all the packages in your project
- These packages are also called **dependencies**
- `package.json` keeps track of:
  - Package names
  - Versions
  - Project configuration

---

## Dependencies

NPM ensures:

- Correct versions of packages are installed
- Version consistency across environments

---

## Most Important Concept: Bundler

### ❓ What is a Bundler?

A **bundler**:

- Combines your HTML, CSS, and JavaScript
- Optimizes code for production:
  - Minification
  - Compression
  - Optimization

👉 In short:  
**It prepares your app for production**

---

### 🧰 Popular Bundlers

- Webpack
- Parcel
- Vite

---

### ⚛️ React & Bundlers

- `create-react-app` uses **Webpack** internally

---

## Parcel

We will use **Parcel** because:

- Easy to configure
- Zero configuration bundler

---

## Installing Parcel

```bash
npm install parcel -D
```

---

## 🔍 What is `-D`?

`-D` means **Dev Dependency**

### Types of Dependencies:

1. **Dependencies**
   - Required in production

2. **Dev Dependencies**
   - Required only during development

👉 Parcel is used during development, so it is a **dev dependency**

---

## 🔢 Versioning Symbols

When you install a package, you may see:

```json
"parcel": "^2.0.0"
```

---

### 🔹 Caret (^)

- Automatically updates:
  - Minor versions
  - Patch versions

👉 Example:

```
^2.0.0 → 2.x.x allowed
```

---

### 🔹 Tilde (~)

- Updates only:
  - Patch versions

👉 Example:

```
~2.0.0 → 2.0.x allowed
```

---

## ⚠️ Important Note

- `^` allows more updates (minor + patch)
- `~` is stricter (only patch)

---

## 📦 package-lock.json

- `package.json` stores **approximate versions**
- `package-lock.json` stores **exact versions**

### Why is it important?

- Locks dependency versions
- Ensures consistency across environments
- Prevents "works on my machine" issues and doesn't on Production.

---

### 🔐 Integrity (Hash)

- `package-lock.json` includes a **hash (sha512)**
- Verifies that installed packages are:
  - Authentic
  - Unchanged

## Have You heard "It is working on my local, I don't know how it break on production". So to avoid that package-lock.json keeps a hash to verify that whatever is there in my machine, meaning whatever is there right now in my dev machine is the same version which is deployed onto the production.

## 📁 node_modules

- Created when you run:

```bash
npm install
```

### What does it contain?

- Actual source code of dependencies
- All installed packages

👉 Think of it as a **database of packages**

---

## 🔗 Transitive Dependencies

- Dependencies of dependencies

👉 Example:

- You install Parcel
- Parcel installs many other packages internally

---

## 📁 Multiple package.json Files

- Your project has **one main package.json**
- But inside `node_modules`, each package has its own `package.json`

---

## 🧾 Summary

- `package.json` → configuration + approx versions
- `package-lock.json` → exact versions + integrity
- `node_modules` → actual code of dependencies
- Bundler → prepares app for production
- Parcel → zero-config bundler
- Dependencies → direct + transitive
