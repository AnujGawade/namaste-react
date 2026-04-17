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

# Part 3 - React Routing

- For Routing we mostly use `createBrowserRouter`/`BrowserRouter` and `RouterProvider` in case we use `createBrowserRouter`.

- Suppose we write a route which is not present in our routes configuration.
- Then react-router-dom gives an error. To avoid this error we can create our own Error component.
- And Once we create a Error Component we can attach it with the use of `errorElement` and used as below:

```javascript
{
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
}
```

- Once done this then it will make the Error component appear whenever a route which is not present in the route configuration.

### useRouteError

- useRouteError() Hook provided by react-router-dom.
- **Using useRouteError() gives more information about Error.**
- **Instead of displaying `Oops!`, something went wrong, we should also display a better message on our page.**
