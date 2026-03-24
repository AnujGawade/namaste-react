# What is Emmet?

Emmet is a shortcut toolkit for writing HTML and CSS faster.

🚀 Simple Example:

👉 You type:

```html
div.container
```

👉 Emmet Expands it to:

```html
<div class="container"></div>
```

### 🧩 Common Emmet Shortcuts:

1. Create Elements

```html
ul>li
```

⬇️

```html
<ul>
  <li></li>
</ul>
```

2. Multiple Elements (\*)

```html
ul>li*3
```

⬇️

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

3. Add Class (.) and ID (#)

```html
div#app.container
```

⬇️

```html
<div id="app" class="container"></div>
```

4. Sibling (+)

```html
h1+p
```

⬇️

```html
<h1></h1>
<p></p>
```

5. Text Content ({})

```html
button{Click Me}
```

⬇️

```html
<button>Click Me</button>
```

6. Numbering ($)

```html
ul>li.item$*3
```

⬇️

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

### Does it work with React??

Yes, Emmet works with JSX meaning can be used in React. But we need to adjust JSX syntax like className and self-closing-tags

# Difference between a Library and Framework?

1. Library

- Can be used in a small part of a page
- Works on specific sections (Header, Footer, etc.)
- Not full control over entire app

2. Framework

- Strict structure
- Less flexibility
- Controls entire application

# What is CDN? Why do we use it?

CDN (Content Delivery Network) is a network of distributed servers placed across different geographic locations that deliver website content faster to users.

The Idea is that instead of loading a website from one central server, CDN servers it from servers it from a server closer to the user.

## Why do we use it?

1. Faster Website Loading
   --Content loads from the nearest server
   --Reduces latency
2. Better Global Performance
   --Works fast for users in different countries
3. Reduced Server Load
   --CDN handles traffic instead of your main server
4. Improved Security
   --Protection against DDoS attacks
   --Many CDNs offer SSL, firewall
5. Caching
   --Stores static files (images, JS, CSS)
   --Reduces repeated requests

# Why is React known as React?

React is known as "react" because the UI updates in response to a change of the state. It is as if the ui reacts to changes of the state.

Core Idea is that when your data(state) changes, React detects the changes updates only the necessary part of the UI and keeps everything in sync automatically.

So the UI reacts to state changes, and hence the name React.

# What is crossorigin in script tag?

Refer to the deep-dive folder. There you will find a file named itself. It contains deep dive of the topic

# What is diference between React and ReactDOM

React - React is responsible for creating components, managing state & props, handling logic and Virtual DOM.
In short, react defines what UI should look like.

ReactDOM - ReactDOM is responsible for taking React components and rendering them into the real DOM (browser). In short, reactDOM decides how & where UI is displayed.

# What is difference between react.development.js and react.production.js files via CDN?

| Feature     | Development Build       | Production Build      |
| ----------- | ----------------------- | --------------------- |
| File        | `react.development.js`  | `react.production.js` |
| Purpose     | Debugging & development | Live/production apps  |
| Size        | Larger                  | Smaller (minified)    |
| Performance | Slower                  | Faster                |
| Warnings    | Shows helpful warnings  | No warnings           |
| Readability | Human-readable          | Minified (compressed) |

# Async vs Defer in JavaScript

## What are `async` and `defer`?

`async` and `defer` are attributes of the `<script>` tag used to load
JavaScript without blocking HTML parsing.

---

## How Browser Works

1.  HTML Parsing
2.  Script Fetching (download)
3.  Script Execution

---

## 1. Normal Script (Blocking)

```html
<script src="app.js"></script>
```

- HTML parsing starts\
- Browser finds `<script>`\
- Parsing stops\
- Script is fetched and executed\
- Parsing resumes

---

## 2. Async Script

```html
<script src="app.js" async></script>
```

- HTML parsing continues\
- Script is fetched in parallel\
- As soon as script is ready → parsing pauses\
- Script executes immediately\
- Parsing resumes

### Key Points

- Execution order is NOT guaranteed

---

## 3. Defer Script

```html
<script src="app.js" defer></script>
```

- HTML parsing continues\
- Script is fetched in parallel\
- Executes only after HTML parsing completes\
- Execution order is maintained

---
