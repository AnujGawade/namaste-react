# Part 1 - useEffect()

### useEffect

- useEffect is called using two arguments.

1. Callback Function - Contains the logic (API call, event listener, etc.)

2. Dependency Array - Controls when the effect should runs

**By the the way dependency array is not mandatory, only Callback function is mandatory.**

```javascript
useEffect(() => {}, []);
```

### When is a useEffect Called?

- useEffect is called after every render of the component.
- Suppose I have called it inside `Header` component. **useEffect() will be called every time my header component renders.**
- But, the presence of the dependency array changes the behaviour of its render.
- **If We don't put an dependency array, it will be called every time my component renders, and when does a component renders when the state variable is changed/updated**

```javascript
useEffect(() => {
  console.log('Runs on every render');
});
```

- **If the dependency array is empty `[]`, it will be called only on initial render. Just once when the component is rendered for the first time.**

```javascript
useEffect(() => {
  console.log('Runs only once');
}, []);
```

- **If we put something inside the dependency array? Then it will only be called everytime the dependency updated.**

```javascript
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```

---

# Part 2 - useState()

### useState - Best Pratices

- useState is used to create local state variables inside the functional component.
- Whenever using useState **never create the state variables outside the component**.
- Try to call these state variables on the **top of the functional component**.
- Never create your state variables **inside** the `if else` or a `Function`.

# ⚛️ Part 3 – React Routing

---

## 🧠 What is Routing in React?

Routing allows us to **navigate between different pages/components** in a React application without reloading the page.

👉 Commonly used library: `react-router-dom`

---

## 📌 Routing Setup

We use:

- `createBrowserRouter`
- `RouterProvider`

---

## ⚠️ Handling Unknown Routes (Error Page)

👉 Problem:
If a user enters a route that is not defined → React throws an error

---

## ✅ Solution: Error Component

```javascript
{
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />,
}
```

👉 `errorElement`:

Displays custom UI when route is not found
Prevents default error page

---

### ⚛️ useRouteError()

- A hook provided by react-router-dom
- Gives detailed information about the error

### 🔥 Example

```javascript
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h2>
        {err.status} - {err.statusText}
      </h2>
    </div>
  );
};
```

👉 Helps display meaningful error messages

# ⚛️ Part 4 – Children Routes

### 🧠 Problem

👉 When navigating to another page:

- Header disappears ❌

### 🎯 Goal

- Keep Header constant
- Change only body content

### ✅ Solution: Nested (Children) Routes

📌 Concept

- Create a layout component
- Use <Outlet /> to render child routes

```javascript
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
```

📌 Router Configuration

```javascript
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
```

### 🔄 How it works

```jsx
Header (fixed)
↓
Outlet → renders child component
```

---

- While making the tabs clickable and routing don't ever use Anchor Tag `<a>` as it reloads our entire webpage.
- In React, we can navigate to a new page without reloading the whole page.
- We use something known as Link provided by react-router-dom
- The Link component works exactly like the anchor tag. But it avoids the reloading of the page.

## 🔗 Navigation in React (Link vs Anchor Tag)

### ❌ Why NOT use `<a>` tag in React?

```html
<a href="/about">About</a>
```

- Causes full page reload
- Breaks Single Page Application (SPA) behavior
- Slower user experience

### ⚛️ React Way: Using Link

👉 Provided by react-router-dom

```javascript
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>;
```

### ✅ Why use Link?

- Prevents full page reload
- Enables client-side routing
- Faster navigation
- Keeps app state intact

### 🧠 How it works

- Link updates the URL
- React Router intercepts it
- Only required component is rendered
- No full refresh happens
