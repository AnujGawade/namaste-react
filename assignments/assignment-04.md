## Is JSX mandatory for React?

**No JSX is not for mandatory for react**.

- React can be also be written with `React.createElement()`.
- However, without JSX:
  - Code becomes very **hard to read**.
  - Writing nested elements becomes **complex**.

## Is ES6 mandatory for React?

No, ES6 is not mandatory for React.

- React can work with older JavaScript versions(ES5)
- But modern React development uses ES6+ features like:
  - Arrow functions(`=>`)
  - `let` and `const`
  - Destructuring
  - Spread Operator(`...`)
  - Modules (`import/export`)

👉 Without ES6:

- Code becomes harder to manage

👉 With ES6:

- Code becomes clean, concise and modern.

## ⚛️ What are the below used for in JSX?

```jsx
{TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>}
```

These are different ways of using/rendering components or values in JSX, but they are NOT all the same.

#### 1. `{TitleComponent}`

- This refers to the function itself, not rendering it.
- It does NOT execute or render the component.
- This will just give a reference to the function.
- Nothing meaningful is rendered on the UI.

#### 2. `{TitleComponent()}`

- This is a normal JavaScript function call.
- It executes the function manually.
- Returns JSX and renders it.

⚠️ Not recommended in React because:

- Bypasses React’s component lifecycle
- Not the standard React way

#### 3. `<TitleComponent />} `

- This is the correct and standard way to use a React component.
- JSX syntax tells React:
  👉 “Render this component”
- React handles:
  - Lifecycle
  - Reconciliation
  - Optimization

#### 4. `{<TitleComponent></TitleComponent>}`

- Used when:
  - You want to pass children.

## How can I write comments in JSX?

In JSX, we cannot use normal JavaScript comments directly inside HTML-like syntax.

👉 Instead, you must use **JavaScript comment syntax inside curly braces `{}`**

---

### ✅ Correct Way (Inside JSX)

```jsx
<div>
  {/* This is a JSX comment */}
  <h1>Hello World</h1>
</div>
```

## What is <React.Fragment></React.Fragment> and <></> ?

Both `<React.Fragment>` and `<> </>` are used to **group multiple elements without adding extra nodes to the DOM**.

---

### 📌 Why do we need Fragments?

In React, a component must return **a single parent element**.

❌ This will cause an error:

```jsx
return (
  <h1>Hello</h1>
  <h2>World</h2>
);
```

✅ Using <React.Fragment>

```javascript
return (
  <React.Fragment>
    <h1>Hello</h1>
    <h2>World</h2>
  </React.Fragment>
);
```

- Groups elements without adding an extra <div> to the DOM.

## ⚛️ What is Virtual DOM?

The **Virtual DOM (VDOM)** is a **lightweight copy of the real DOM** kept in memory by React.

- It is a **JavaScript object representation** of the actual DOM.
- React uses it to **optimize UI updates efficiently**.

### 🧠 How it works?

1. React creates a **Virtual DOM tree**
2. When state/props change:
   - A **new Virtual DOM** is created
3. React compares (diffs) the old and new Virtual DOM  
   👉 This process is called **Reconciliation**
4. Only the **changed parts** are updated in the real DOM

---

## ⚛️ What is Reconciliation in React?

**Reconciliation** is the process by which React:

- 👉 Compares the **previous Virtual DOM** with the **new Virtual DOM**
- 👉 Finds the differences
- 👉 Updates only the changed parts in the real DOM

---

### Why is Reconciliation needed?

Updating the entire DOM is slow ❌  
So React:

- Compares old vs new Virtual DOM
- Updates only what changed ✅

---

### 🔄 Step-by-Step Process

1. Initial render → Virtual DOM created
2. State/props change → New Virtual DOM created
3. React compares (diffs) both trees
4. Finds minimal changes
5. Updates real DOM efficiently

## ⚛️ What is Diffing Algorithm in React?

The **Diffing Algorithm** is the process React uses to:
👉 Compare the **old Virtual DOM** with the **new Virtual DOM**
👉 Identify what has changed
👉 Update only those parts in the real DOM

---

### 🧠 Why does React use Diffing?

Updating the real DOM is **slow and expensive** ❌

👉 So instead of:

- Rebuilding the entire DOM

React:

- Compares changes efficiently
- Updates only what's necessary ✅

---

### Problem React Solves

If React compared every node deeply:

- Time complexity = **O(n³)** ❌ (very slow)

👉 React optimizes it to:

- **O(n)** ✅ (very fast)

---

### 🔥 How Diffing Works (Core Rules)

React makes some assumptions to optimize performance:

## What is React Fiber?

**React Fiber** is the **new reconciliation engine of React** introduced in React 16.

👉 It is responsible for:

- Rendering
- Reconciliation (diffing)
- Updating the UI efficiently

---

## 🧠 Why was React Fiber introduced?

Before Fiber:

- React used a **synchronous rendering process**
- Once rendering started, it **could not be paused**
- Large updates caused **UI lag and blocking**

---

## 🚀 What Fiber solves

React Fiber makes rendering:

- ✅ **Asynchronous**
- ✅ **Interruptible**
- ✅ **Prioritized**

👉 This improves performance and user experience

---

## ⚙️ Key Features of React Fiber

### 1. Incremental Rendering

- Breaks rendering work into **small chunks**
- Processes them step by step

---

### 2. Scheduling (Priority-Based)

- React can prioritize tasks:
  - High priority → User input (click, typing)
  - Low priority → Background updates

---

### 3. Pause, Resume, Abort

- React can:
  - Pause rendering
  - Resume later
  - Cancel unnecessary work

---

### 🔄 How Fiber Works (Simplified)

1. React creates a **Fiber tree** (like Virtual DOM)
2. Work is split into units (fibers)
3. React processes them:
   - Based on priority
   - Without blocking UI
4. Finally updates the real DOM

---

### 💡 Simple Analogy

👉 Old React:

- Like doing one big task without stopping

👉 React Fiber:

- Like breaking work into small tasks and doing important ones first

---

## Why we need keys in React? When do we need keys in React?

React uses key to identify elements uniquely. Each item in the list must be uniquely identified.

- When we have components at same level and if a new component
  comes on the first without ID, DOM is going to re-render all thecomponents again. As DOM can’t identify where to place it.
- But if we give each of them a unique ID then react knows where to put that component according to the ID. It is a good
  optimization and performance thing.

### When do we need keys in React?

While mapping the items from the list. Each item must be uniquely identified.

## Can we use index as keys in React?

Yes, we can use index as a key. But, it is not recommended to use index in React's official documentations.

- If list order changes (insert/delete/reorder):
  - React gets confused
  - Leads to unexpected UI bugs
- 👉 Example problem:
  - New item added at the top
  - React re-renders everything incorrectly
