# React vs ReactDOM & createRoot (React 18/19)

## ❗ Common Misconception

> "ReactDOM is removed in React 19"

❌ This is incorrect.

-   **React** → Handles UI logic (components, state, props)
-   **ReactDOM** → Handles rendering to the browser DOM

👉 ReactDOM still exists, but the API has evolved.

------------------------------------------------------------------------

## 🔄 What Changed (React 17 vs React 18+)

### React 17

``` js
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));
```

### React 18+

``` js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

------------------------------------------------------------------------

## 🧠 Why the Change?

-   Enables **Concurrent Rendering**
-   Better performance
-   More control over rendering

------------------------------------------------------------------------

## ✅ Your Code (Reviewed)

``` js
import React from 'react';
import { createRoot } from 'react-dom/client';

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'My Name is Anuj and reverse of my name is Juna',
);

const root = createRoot(document.getElementById('root'));
root.render(heading);
```

### ✔️ What's Correct

-   Using `createRoot` ✅
-   Proper `React.createElement` usage ✅
-   Rendering correctly ✅

------------------------------------------------------------------------

## ⚠️ Improvements

### 1. Null Safety

``` js
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
```

------------------------------------------------------------------------

### 2. Use JSX (Recommended)

``` js
const heading = <h1 id="heading">My Name is Anuj</h1>;
```

------------------------------------------------------------------------

## 🔑 Key Takeaways

-   ReactDOM is **not removed**
-   `createRoot` replaces `ReactDOM.render`
-   React = UI logic
-   ReactDOM = rendering engine

------------------------------------------------------------------------

## 🎯 Interview Answer

"ReactDOM is not removed in React 18+. Instead of `ReactDOM.render`, we
now use `createRoot` from `react-dom/client`, which enables concurrent
rendering and better performance."
