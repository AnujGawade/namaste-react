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

# What is the importance of config.js file?

A `config.js` file is used to centralize all configuration values of our app in one place.
👉 Instead of hardcoding values everywhere, you keep them in one file.

## Why is it important?

### 1. Single Source of truth

Instead of writing values again and again in muliple files right in single file:

```javascript
export const API_URL = 'https://api.example.com';
```

### 2.Easy to Maintain

If API changes:

- Change in 10 files
- Change in one file only

### 3. Clean Code (Very Important)

Your components stay clean:

```javascript
import { API_URL } from './config';
```

### 4.Reusability

You can store:

- API URLs
- Image URLs
- Constants
- App settings

# What are React Hooks?

React Hooks are nothing but normal JavaScript functions.

- 👉 React Hooks are special functions provided by React that let you use state and other React features inside functional components.

- 👉 They are JavaScript functions with special capabilities (superpowers) like:
  - Managing state
  - Handling lifecycle
  - Accessing context
  - Optimizing performance

- These functions has some logic written behind it

# Why do we need a useState Hook?

`useState` is a hook which is used to create State Variables.

- These State Variables trigger re-render when they are updated.
- Meaning, Whenever a state variable updates, react re-renders the component.
