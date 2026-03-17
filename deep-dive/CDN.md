# CDN in React (Namaste React - Episode 1)

## What is a CDN?

CDN (Content Delivery Network) is a network of distributed servers placed across different geographic locations that deliver website content faster to users.

Meaning, Instead of loading resources from one central server, the CDN delivers files from the nearest server to the user.

### Example

If a website server is in the USA and a user opens it from India:

- Without CDN → Request travels India → USA → India
- With CDN → Request goes to nearest CDN server (India or Asia)

This reduces latency and improves loading speed.

---

# CDN in React (Namaste React Episode 1)

In the first episode of Namaste React, I added React using CDN links.

Example:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

These scripts load React and ReactDOM directly from a CDN.

### What happens internally?

1. Browser loads the HTML file.
2. React library is downloaded from CDN.
3. React becomes available globally.
4. We can use `React.createElement()` directly in JavaScript.

Example:

```javascript
const heading = React.createElement('h1', {}, 'Hello React');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

---

# Why CDN is Used in the Beginning

### 1. No Setup Required

We do not need:

- Node.js
- npm
- bundlers

Just open the HTML file in the browser.

---

### 2. Good for Learning React Fundamentals

It helped me understand:

- `React.createElement`
- Virtual DOM concept
- Rendering using `ReactDOM`

---

# Why CDN is NOT Used in Production React Apps

In real-world applications, React is installed using npm.

Example:

```bash
npm install react react-dom
```

Then build tools (bundlers) are used.

---

# Reasons We Stop Using CDN in Production

## 1. Dependency Management

CDN makes it difficult to manage library versions.

Example problem:

```
React 18
ReactDOM 17
```

This mismatch can break the application.

With npm, dependencies are managed in:

```
package.json
```

---

## 2. No Build Optimization

Modern applications require:

- Tree Shaking
- Code Splitting
- Minification
- Bundling

CDN cannot perform these optimizations.

Bundlers handle this during the build process.

---

## 3. No Module System

Modern React uses ES Modules.

Example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
```

CDN exposes React as global variables, not modules.

---

## 4. Security Risks

If a CDN server is compromised or unavailable, the application may break.

Production apps prefer controlled and locally installed dependencies.

---

## 5. Not Scalable for Large Applications

Large projects require:

- environment variables
- build pipelines
- CI/CD
- asset optimization

CDN-only setup cannot support this.
