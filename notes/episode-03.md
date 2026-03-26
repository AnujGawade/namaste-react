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

# ⚙️ Part 4 – Babel

---

## 📌 What is Babel?

- Babel is a **JavaScript Compiler**
- Also called a **Transpiler**

---

## 🔄 What does Babel do?

- Converts **JSX → JavaScript**
- Makes code understandable by **browser & JS engine**

---

## ⚡ Flow

```text
JSX → React.createElement → React Element (JS Object) → Browser (DOM)
```

---

## 🌐 Browser Compatibility

- Old browsers do NOT support modern JS (ES6+)
- Babel converts modern JS → older JS

👉 Ensures **cross-browser compatibility**

---

## ⭐ Key Takeaways

- Babel converts JSX → JS
- Helps run code in all browsers
- Used internally by bundlers like Parcel

---

# ⚛️ Part 5 – React Components & Composition

---

## 📌 Components in React

👉 Everything in React is a **Component**

---

## 🔹 Types of Components

1. **Class Components** → Old
2. **Functional Components** → Modern (used now)

---

## 🔹 Functional Component

- A **normal JavaScript function**
- Returns **JSX / React Element**

---

### Example:

```javascript
const Heading = () => {
  return <h1>Hello React</h1>;
};
```

---

## ⚠️ Important Rule

- Component name must start with **Capital Letter**

```javascript
// ✅ Correct
const Header = () => {};

// ❌ Wrong
const header = () => {};
```

---

## 🔹 Component Composition

👉 Using one component inside another

---

### Example:

```javascript
const Title = () => <h1>Title</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>Heading</h2>
    </div>
  );
};
```

---

## ⭐ Key Takeaways

- Components are **building blocks of UI**
- Functional components are most commonly used
- Components can be **nested (composition)**

---

# 🔐 Part 6 – Cross-Site Scripting (XSS)

---

## 📌 What is XSS?

- A security issue where **malicious scripts** are injected into web apps

---

## ⚛️ JSX Protection

- JSX **automatically escapes values**
- Prevents malicious code execution

---

### Example:

```javascript
const data = "<script>alert('hack')</script>";
```

```jsx
<div>{data}</div>
```

👉 Output: script will NOT execute

---

## ⭐ Key Takeaways

- JSX **sanitizes data by default**
- Protects against **XSS attacks**
- Safe when using `{}` to render data

---

# ⭐ One Line Summary

👉 Babel converts JSX to JavaScript, components build UI, and JSX keeps apps safe from XSS.
