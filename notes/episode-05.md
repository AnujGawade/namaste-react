# ⚛️ React Advantages

## 🤔 Why use React?

Everything that React can do can also be done using **HTML, CSS, and JavaScript**.

👉 Then why do we use React?

---

## 🚀 Answer

The beauty of using a **library or framework** is that it improves the **Developer Experience (DX)**.

React helps us:

- Write **less code**
- Build **complex UIs easily**
- Manage large applications efficiently

---

## 💡 Advantages of React

- ⚡ Faster development
- 🔁 Reusable components
- 🧠 Easy to manage large applications
- 🚀 High performance (Virtual DOM + Diffing)
- 📦 Scalable for production-level apps

👉 React gives developers **superpowers** to build:

- Large
- Scalable
- High-performance applications

---

## 🎯 Key Idea

> React makes development faster while also optimizing performance behind the scenes.

---

# 📦 Part 1 – Import & Export in JavaScript

There are **two ways to export and import modules**:

---

## 1. Default Export

- A file can have **only one default export**

### 📤 Export:

```javascript
export default Component;
```

📥 Import:

```javascript
import Component from './Component';
```

## 2. Named Export

- Used when exporting multiple items from a file

📤 Export:

```javascript
export const Header = () => {};
export const Footer = () => {};
```

📥 Import:

```javascript
import { Header, Footer } from './Component';
```
