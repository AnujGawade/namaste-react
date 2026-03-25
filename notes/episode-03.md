# Part 1 - Scripts in package.json

---

## 📌 Problem

To run a Parcel app, we usually write:

```bash
npx parcel ./index.html
```

For production build:

```bash
npx parcel build ./index.html
```

👉 These commands are repetitive and long.

---

## 📌 Solution: Scripts in package.json

We can define custom scripts inside `package.json` to simplify commands.

---

## 🛠️ Example

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

---

## 📌 How to Run Scripts

### ▶️ Start Development Server

```bash
npm run start
```

OR

```bash
npm start
```

---

### 🏗️ Create Production Build

```bash
npm run build
```

---

# 🔁 Part 2 – Revision (Previous Concepts)

---

## 📌 Why do we write "Not Rendered" inside root?

### Example:

```html
<div id="root">Not Rendered</div>
```

---

## 🧠 Reason

- This acts as a **fallback content**
- Helps us detect if React is working properly

---

## ⚠️ What Happens?

- When React works correctly → content inside root gets **replaced**
- When React fails (error/bug) → we still see:

```text
Not Rendered
```

---

## 🔍 Why is this useful?

- Helps in **debugging**
- Quickly tells us that:
  👉 React is not rendering properly
  👉 There is an error in the app

---

## ⭐ Key Insight

- React **replaces everything inside root**
- If replacement does NOT happen → something is wrong

---

# ⚛️ Part 3 – JSX and Babel

---

## 📌 What is JSX?

- JSX = **JavaScript XML**
- Used to **write React elements easily**
- Makes code **clean & readable**

---

## ❗ Important Clarifications

- JSX is **NOT part of React**
- React can be written **without JSX**
- JSX is just a **syntax / convention**
- **JSX is not html inside JavaScript**. It is different then HTML.
- **JSX is a html like Syntax**

---

## 📌 JSX vs React.createElement

### 🔹 Without JSX

```javascript
React.createElement('h1', { id: 'heading' }, 'My Name is Anuj');
```

---

### 🔹 With JSX

```jsx
<h1 id="heading">My Name is Anuj</h1>
```

---

## 🧠 Key Point

👉 Both create the **same React Element (JS Object)**
👉 **And When logged both of them, meaning React.createElement and JSX have same object**

---

## ⚠️ Is JSX JavaScript?

- ❌ Not pure JavaScript
- ❌ Browsers do NOT understand JSX
- ✅ Looks like HTML
- ✅ Actually **syntax sugar**

---

## ❓ Then how does JSX work?

👉 Browsers understand only **JavaScript (ES6)**
👉 JSX must be converted before execution

---

## 🔄 Transpilation

- JSX → converted into → `React.createElement()`

---

## 🔧 Role of Babel

- Babel is a **transpiler**
- Converts JSX → JavaScript

---

## ⚙️ Role of Parcel

- Parcel uses **Babel internally**
- Converts code **before sending to browser**

---

## ⚡ Flow

```text
JSX → Babel → React.createElement → JS Object → Browser
```

---
