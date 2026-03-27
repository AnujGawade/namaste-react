# Theory Assignment

## 1. What is NPM?

- First of All, NPM does not stand for Node Package Manager.
- Now, NPM is a tool used to manage JavaScript packages.
- It is a **repository** of open-source packages.
- It helps developers **install, update, and manage dependencies** in a project.

---

## 2. What is Parcel/Webpack? Why do we need it?

**Parcel and Webpack** are **bundlers**.

- They **bundle all project files** (HTML, CSS, JS, images) into optimized files.
- They prepare the application for **production deployment**.

### Why do we need bundlers?

- To **optimize performance** (minification, compression)
- To **handle modern JavaScript (ES6+)**
- To **manage dependencies efficiently**
- To enable features like:
  - Hot Reloading
  - Code Splitting
  - Tree Shaking

---

## 3. What is `.parcel-cache`?

`.parcel-cache` is a folder used by **Parcel** to store cached build data.

- Parcel caches code all the time.
- When we run the application, a build is created which takes time in ms.
- If we do some changes in our code and save, another build will be made but this time it will take less time than before.
- This reduction of time is due to parcel cache.
- Parcel loads the data from the cache every time there is a new build created.

---

## 4. What is `npx`?

- NPX (Node Package Executor) is a tool that comes with npm. It allows to execute the packages.
- In Short, NPM is used to install the packages and NPX is used to run/execute the packages.

## 5. What is difference between `dependencies` vs `devDependencies`

### `dependencies`

- These are packages required for the **application to run in production**.
- They are included when the app is deployed.

### `devDependencies`

- These are packages required only during development.
- They are not needed in production.
- In short:
  dependencies → Required to run the app
  devDependencies → Required to develop the app

## 6. What is Tree Shaking?

**Tree Shaking** is a process to **remove unused code** while developing.

- It eliminates code that is **not being used/imported** in the application.
- Helps reduce the **bundle size**.
- Improves **performance and loading speed** of the

## 7. What is Hot Module Replacement?

**Hot Module Replacement (HMR)** is a feature that allows modules to be **updated without reloading the entire page**

- It updates only the **changed part of the code**
- **Without reload → Faster development**

## 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

5 superpowers of parcel are :-

1. Hot Module Replacement
2. Bundling
3. Tree Shaking
4. Parcel Cache
5. Compatible with older browser versions

## 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them.

### 🚀 5 Superpowers of Parcel:

1. Hot Module Replacement (HMR)
2. Bundling
3. Tree Shaking
4. Caching (Parcel Cache)
5. Compatibility with older browsers (via Babel)

---

## 🔍 Explanation of any 3:

### 1. Hot Module Replacement (HMR)

- When we do some changes in our code, have you notice that whatever changes we do gets reflected in our browser immediately, without even refreshing. This is known as Hot Module Replacement.
- There is File Watching Algorithm which keeps tracks of all the files which are changing and tells the browser to update.

👉 This makes development **faster and smoother**.

---

### 2. Tree Shaking

- Parcel has Tree Shaking which removes unused code while the app is run.

👉 This helps in creating a **lightweight and optimized application**.

---

### 3. Caching

- Parcel caches code all the time.
- When we run the application, a build is created which takes time in ms.
- If we do some changes in our code and save, another build will be made but this time it will take less time than before.
- This reduction of time is due to parcel cache.

---

## 9. What is `.gitignore`? What should we add and not add into it?

### What is `.gitignore`?

`.gitignore` is a file used in **Git** to specify which files and folders should be **ignored (not tracked)** by version control.

- It prevents unnecessary or sensitive files from being pushed to the repository.
- Helps keep the repository **clean and secure**.

---

### ✅ What should we add to `.gitignore`?

1. **node_modules/**
   - Contains installed packages (can be reinstalled using `npm install`)

2. **Build folders**
   - `dist/`, `build/`, `.parcel-cache/`

3. **Environment files**
   - `.env` (contains sensitive data like API keys)

4. **Log files**
   - `*.log`

5. **System files**
   - `.DS_Store` (Mac), `Thumbs.db` (Windows)

---

### ❌ What should NOT be added to `.gitignore`?

1. **Source code**
   - `src/`, `components/`, etc.

2. **package.json & package-lock.json**
   - Required to install dependencies

3. **Configuration files**
   - `webpack.config.js`, `.babelrc`, etc.

4. **README.md / documentation**
   - Important for understanding the project

---
