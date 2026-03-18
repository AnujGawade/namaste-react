# Part 1 – Hello World using HTML

We can create UI directly using HTML

```html
<h1>Hello World</h1>
```

Browser directly understands HTML and renders it.

# Part 2 – Hello World using JavaScript

We can create elements using JavaScript.

```javascript
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World';

const root = document.getElementById('root');
root.appendChild(heading);
```

## Key Point:

JavaScript manipulates the DOM manually.  
This becomes complex for large applications.

# Part 3 – Hello World using React

## React.createElement()

React provides a method:

```javascript
React.createElement(type, props, children);
```

### It takes 3 arguments:

- **Type** → Which tag you want (h1, div)
- **Props (Object)** → Attributes (id, class, etc.)
- **Children** → What goes inside the element

```javascript
const heading = React.createElement('h1', { id: 'title' }, 'Hello React');
```

## ⚠️ Important Concept

👉 This does NOT create a real DOM element

It creates a **React Element**

A React Element is just a **JavaScript Object**

```javascript
console.log(heading); // Object
```

## 📌 ReactDOM.createRoot()

Before rendering, we need to create a root:

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
```

### 🔑 Why?

- React needs a root container
- Inside this root, React will manage the DOM meaning all the components will be rendered on that root.

## 📌 root.render()

```javascript
root.render(heading);
```

### 🔥 What it does:

- Takes the React Element (JS Object)
- Converts it into a real DOM element
- Renders it inside the browser

## ⚡ Flow of React

```
React.createElement → React Element (JS Object)
↓
root.render()
↓
Browser DOM (Actual HTML)
```

## 📌 Why React?

- DOM manipulation is expensive
- React optimizes DOM updates
- Uses Virtual DOM (important concept ahead)

## 📌 Attributes (Props)

Passed as an object in createElement:

```javascript
{ id: "title", className: "heading" }
```

These are similar to HTML attributes

# Part 4 – Nested Elements

## 📌 Creating Nested Structure in React

Now we learned how to render a particular tag in React. But, what if we want to create a structure like below:

```html
<div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
  </div>
</div>
```

---

## 📌 How to Create This in React

We use nested `React.createElement()` calls.

```js
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, "I'm an h1 tag"),
  ),
);
```

---

## 📌 Step-by-Step Explanation

### 1️⃣ Create Parent Div

```js
React.createElement("div", { id: "parent" }, ...)
```

- First argument → "div"
- Second argument → { id: "parent" }
- Third argument → children (next element)

---

### 2️⃣ Create Child Div

```js
React.createElement("div", { id: "child" }, ...)
```

- This becomes the child of parent div.

---

### 3️⃣ Create h1 Tag

```js
React.createElement('h1', {}, "I'm an h1 tag");
```

- No attributes → {}
- Text content → "I'm an h1 tag"

---

## ⚡ Final Flow

Parent Div  
↓  
Child Div  
↓  
h1 Tag

---

## 📌 Rendering to DOM

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
```

---

## 📌 Multiple Children in React

### HTML Structure

```html
<div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>
```

---

## ❗ Important Concept

👉 If there are multiple children, we pass them as an array

---

## ✅ React Code

```js
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ]),
);
```

---

## 📌 Why Array?

`React.createElement()` third argument accepts:

- Single child → directly
- Multiple children → array of elements

---

## ⚠️ Important Points

- Nested structure = nested function calls
- Multiple children = array
- Everything is still a JavaScript Object (React Element)

# Part 5 – Need of JSX

## 📌 Problem with React.createElement

But, what if we want to create a structure like below:

```html
<div id="parent">
  <div id="child1">
    <h1>I'm an h1 tag</h1>
  </div>
  <div id="child2">
    <h1>I'm an h1 tag</h1>
  </div>
</div>
```

---

## 📌 How to Create This in React

We use nested `React.createElement()` calls.

```js
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ]),
]);
```

---

## ❗ Problem

- Code becomes hard to read
- Too many nested function calls
- Difficult to maintain for complex UI

👉 React is meant to make development easier, not harder.

---

## 📌 Solution: JSX

This is why we use **JSX (JavaScript XML)**.

- Looks like HTML
- Easier to read & write
- Cleaner and maintainable

---

# 📌 Script Order in HTML

We have the following scripts in our HTML:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>

<script src="./App.js"></script>
```

---

## ❓ Does Order Matter?

👉 YES, order is very important.

### ❌ Wrong Order

```html
<script src="./App.js"></script>
<script src="react.js"></script>
<script src="react-dom.js"></script>
```

### ⚠️ Error

```
Uncaught ReferenceError: React is not defined
```

---

## ✅ Correct Order

- React must load first
- Then ReactDOM
- Then your App.js

👉 Because App.js depends on React.

---

# 📌 Root Rendering Behavior

## ❓ What if root already has content?

👉 React will **replace** the existing content.

- Initially → Old content is shown
- Within milliseconds → React replaces it

---

# 📌 Library vs Framework

## ✅ React is a Library

- Can be used in a small part of a page
- Works on specific sections (Header, Footer, etc.)
- Not full control over entire app

## ❌ Framework (like Angular)

- Controls entire application
- Strict structure
- Less flexibility

---

## ⚡ Key Takeaways

- Nested `createElement` becomes messy
- JSX makes code readable
- Script order matters
- React replaces root content
- React is a library, not a framework
