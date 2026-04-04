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

# What is the difference between Named Export, Default export and \* as export?

## 1. Default Export

- A File can have only one default export.
- No {} needed while importing
- You can rename it while importing

### 📤 Export:

```javascript
export default Component;
```

📥 Import:

```javascript
import Component from './Component';
```

🔥 Rename Allowed

```javascript
import MyComponent from './Component';
```

## 2. Named Export

- Used when exporting multiple items from a file.
- Must use {} while importing
- Names must match

📤 Export:

```javascript
export const Header = () => {};
export const Footer = () => {};
```

📥 Import:

```javascript
import { Header, Footer } from './Component';
```

🔥 Rename with Alias

```javascript
import { Header as AppHeader } from './Component';
```

## 3. \* as Export (Namespace Import)

- This imports everything from a file as a single object

## ⚡ Why is React Fast?

React is fast because it performs **fast and efficient DOM manipulation**.

### 📌 Reasons:

- Uses **Virtual DOM**
- Applies **Diffing Algorithm**
- Updates only the **changed parts** of the UI
- Avoids unnecessary re-renders

👉 This makes React applications **highly performant**

---

## ⚛️ useState

### 🤔 Problem Statement

In your example:

- You filtered restaurant data on button click
- Console shows updated data ✅
- But UI does NOT update ❌

👉 Why?

Because React **does not track normal JavaScript variables**

---

## 🧠 Solution: State Variable

To make React update the UI, we use **state variables**

👉 Created using the `useState` Hook

---

### 📌 What is `useState`?

- A **React Hook**
- Used to create **state variables**
- State variables trigger **re-render when updated**
- Meaning, Whenever a state variable updates, react re-renders the component.

---

### 🧪 Syntax:

```javascript
const [state, setState] = useState(initialValue);
```

#### In the video lecture Akshay constantly called the Superpowerful state variable because this variable keeps the UI layer in sync with the data layer.

## ⚛️ What is React Algorithm?

React uses a process called the **Reconciliation Algorithm** to update the UI efficiently.

👉 In React 16, a new engine called **React Fiber** was introduced, which powers this algorithm.

- React Fiber is the **new reconciliation engine**
- It improves how React:
  - Finds differences (diffing)
  - Updates the DOM
  - Handles rendering efficiently

---

## 🧠 Example

- Suppose we have a container (`div`) with **7 Restaurant Cards**
- After applying a filter, only **3 cards remain**

👉 What happens internally?

---

## ⚛️ Virtual DOM

- React creates a **Virtual DOM**
- It is a **JavaScript object representation** of the real DOM

👉 Example understanding:

- When you log a component like `<Body />`
- You get a **JavaScript object**
- This object is the **Virtual DOM**

---

## 🔍 What is Diffing Algorithm?

The **Diffing Algorithm** compares:

👉 Old Virtual DOM  
👉 New Virtual DOM

- It finds the **difference between both**
- In our example:
  - 7 cards → 3 cards
  - Difference = 4 nodes removed

---

## 🔄 What happens next?

1. React creates a new Virtual DOM
2. Compares it with the previous Virtual DOM
3. Finds the differences (diffing)
4. Updates only the changed parts in the real DOM

👉 This process happens on every render cycle

---

## 🚀 Why is this powerful?

- Avoids full DOM re-render ❌
- Updates only required elements ✅
- Makes UI updates **fast and efficient**

---

## 🧠 Key Concepts

- **Virtual DOM** → JS representation of UI
- **Diffing** → Finding differences
- **Reconciliation** → Updating DOM efficiently
- **React Fiber** → Engine that performs all of this

---
