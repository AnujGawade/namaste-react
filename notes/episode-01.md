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
