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

# 🚀 Part 2 - Igniting our App using Parcel

## 📌 Running Parcel

When we run:

```bash
npx parcel ./index.html
```

👉 It hosts the app on:
http://localhost:1234

---

## 📦 What is `npx parcel ./index.html`?

- `npm` → used to **install packages**
- `npx` → used to **execute packages**

### ✅ Key Difference

| Command | Purpose          |
| ------- | ---------------- |
| npm     | Install packages |
| npx     | Execute packages |

👉 So, when we run:

```bash
npx parcel ./index.html
```

- Parcel takes `index.html` as the **entry point**
- Builds a **development build**
- Starts a **local server**
- Hosts app on `localhost:1234`

---

## ⚠️ Why NOT use React via CDN?

Using CDN links is **not recommended** because:

1. ❌ **Network Dependency**
   - Every time browser fetches React from internet

2. ❌ **Slower Performance**
   - External request increases load time

3. ❌ **Not Scalable**
   - Not suitable for production apps

4. ✅ Better Approach:
   - Install React via `npm`
   - Use from `node_modules`

---

# 📦 Parcel Bundler

Parcel is a **zero-config bundler** that simplifies development.

---

## 🔥 Features of Parcel

### 1. 🚀 Dev Build

- Creates a development build of your app

---

### 2. 🌐 Local Server

- Runs app on:
  http://localhost:1234

---

### 3. 🔄 HMR (Hot Module Replacement)

👉 Automatically updates browser when you save changes

**Without reload → Faster development**

---

### 4. 👀 File Watching Algorithm

- Tracks file changes
- Written in **C++**
- Makes detection super fast

---

### 5. ⚡ Caching (Faster Builds)

- First build → slower
- Next builds → faster

👉 Why?

- Parcel stores cache in:
  .parcel-cache

- Reuses previous build data

---

### 6. 🖼️ Image Optimization

- Automatically optimizes images

---

### 7. 📉 Minification

- Removes unnecessary code
- Reduces file size

---

### 8. 🗜️ Compression

- Compresses files for better performance

---
