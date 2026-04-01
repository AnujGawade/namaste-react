## What is JSX?

**JSX (JavaScript XML)** is a **syntax extension for JavaScript** that allows us to write HTML-like code inside JavaScript.

- It is **HTML-like** or **XML-like** syntax. But it is NOT HTML.
- JSX is converted into **React.createElement()** behind the scenes.
- It is not a part of React. React apps can be build without using JSX. But when we use traditional react without JSX, then the code becomes very hard to read.

## Superpowers of JSX

### 1. Makes code readable

- JSX makes it easier to write code.
- Avoids writing complex `React.createElement()` Syntax.

👉 Example:

Without JSX:

```javascript id="h3y7kx"
React.createElement("h1", {}, "Hello World");
```

With JSX:

```javascript
<h1>Hello World</h1>
```

### 2. Show more errors and warnings.

- JSX provides clear error messages
- Helps developers identify mistakes easily during development.

### 3. Provents Code Injections

- JSX automatically escapes values.
- Protects against XSS (Cross-Site Scripting) attacks

👉 Example:

```javascript
const data = "<script>alert('hack')</script>";
<h1>{data}</h1>;
```

- This will NOT execute the script
- It will render it as plain text

### XSS(Cross-site Scripting)

- If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called cross-site scripting.
- It can read cookies, local storage, session storage, get
  cookies, get info about your device, and read data. JSX takes
  care of your data.
- If some API passes some malicious data JSX will escape it. It
  prevents cross-site scripting and sanitizes the data before
  rendering.

## Role of type attribute in script tag? What options can I use there?

The `type` attribute in the `<script>` tag specifies **how the browser should interpret the script**.

### 📌 Common Options:

### 1. `text/javascript` (Default)

```html
<script type="text/javascript" src="app.js"></script>
```

- This is the default value
- Used for normal JavaScript files

### 2. module

```html
<script type="module" src="app.js"></script>
```

- Enables ES Modules (ES6 import/export)
- Allows usage of:

```javascript
import ... from ...
export ...
```

## ⚛️ What are the below used for in JSX?

```jsx
{TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>}
```

These are different ways of using/rendering components or values in JSX, but they are NOT all the same.

#### 1. `{TitleComponent}`

- This refers to the function itself, not rendering it.
- It does NOT execute or render the component.

#### 2. `{TitleComponent()}`

- This is a normal JavaScript function call.
- It executes the function manually.
- Returns JSX and renders it.

⚠️ Not recommended in React because:

- Bypasses React’s component lifecycle
- Not the standard React way

#### 3. `{<TitleComponent />}`

- This is the correct and standard way to use a React component.

```jsx
<TitleComponent />
```

- JSX syntax tells React:
  - 👉 “Render this component”
- React handles:
  - Lifecycle
  - Reconciliation
  - Optimization

#### 4. `{<TitleComponent></TitleComponent>}`

- Same as self-closing tag:

```javascript
<TitleComponent></TitleComponent>
```

- Used when:
  - You want to pass children
