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

`.gitignore` is a file used in **Git** to specify which files and folders should be **ignored (not tracked)**.

- It prevents unnecessary or sensitive files from being pushed to the repository.
- Helps keep the repository **clean and secure**.

---

### What should we add to `.gitignore`?

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

### What should NOT be added to `.gitignore`?

1. **Source code**
   - `src/`, `components/`, etc.

2. **package.json & package-lock.json**
   - Required to install dependencies

3. **Configuration files**
   - `webpack.config.js`, `.babelrc`, etc.

4. **README.md / documentation**
   - Important for understanding the project

---

## 10. What is the difference between `package.json` and `package-lock.json`?

### Package.json

Package.json file is a configuration for NPM.

- The Packages that our project needs, we install using NPM.
- Once Packages are installed, there version/configuration information is stores inside package.json.
- It contains the approximate version of packages used in our project.

---

### Package-lock.json

Package-lock.json locks the exact version of the packages used in our project.

---

### Difference between `package.json` and `package-lock.json`

package.json stores the approximate version of packages used in our project and Package-lock.json stores the exact version of the packages used in our project.

---

## 11. Why should I not modify `package-lock.json`?

`package-lock.json` is an automatically generated file by NPM that **locks the exact versions of dependencies** used in the project.

---

### 📌 Why should you NOT modify it manually?

1. **Ensures consistency**
   - It guarantees that every developer installs the **same exact versions** of dependencies.
   - Avoids “it works on my machine” issues.

2. **Maintains dependency tree**
   - It stores the complete dependency structure (including sub-dependencies).
   - Manual changes can break this structure.

3. **Prevents unexpected bugs**
   - Even small changes can cause **version mismatches** and bugs.

---

### Let all this things aside have You heard "It is working on my local, I don't know how it broke on production". So to avoid that package-lock.json keeps a hash to verify that whatever is there in my machine, meaning whatever is there right now in my dev machine is the same version which is deployed onto the production.

---

## 12. What is `node_modules` ? Is it a good idea to push that on git?

`node_modules` are like a database of Packages which gets installed whenever we run:

```bash
npm install
```

---

### Is it a good idea to push that on git?

**No, it is NOT a good idea to push `node_modules` to Git.**

---

### Reasons:

1. **Very large in size**
   - `node_modules` can contain thousands of files.
   - It makes the repository **heavy and slow**.

2. **Can be regenerated**
   - All dependencies are already defined in `package.json` and `package-lock.json`.
   - You can recreate it anytime using:
     ```bash
     npm i
     ```

---

## 13. What is the `dist` folder?

When bundler builds the app, the build gets stored in the folder knowns as dist.

- The dist folder contains the minified and optimized version of the source code.
- This build can be created using the following command:

```bash
npx parcel index.html
```

- To make a production build:

```bash
npx parcel build index.html
```

---

## 14. What is `browserlists`

Browserslist is a tool that specifies which browsers should
be supported/compatible in your frontend app.

- It makes our code compatible for a lot of browsers.
- In package.json file do:

```javascript
browserslist: ['last 2 versions'];
```

This will guarantee to make our project work on last versions of all the browsers.
