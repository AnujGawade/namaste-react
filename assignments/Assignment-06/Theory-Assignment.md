# 1. What is a Microservice?

- MicroService is a idea of splitting our application into a set of smaller, interconnected services instead of building a single monolithic application.
- Each Service handles it's own specific job, like handling the order code or managing payments.
- This method of development where each team works on a different services and no other team interfering is known as `MicroService Architecture`.
- In this all the teams works on their own independent services, everybody works on the different repository of their services.

# 2. What is Monolith architecture?

- Monolith is the idea of building the entire application where everything is bundled together.
- Imagine building an entire application where all the code - API's, database connections, backend and even notification services reside in one massive project with single code base.
- This method of development where all the teams work on a single code base is known as `Monolith Architecture`.

# 3. Why do we need a useEffect Hook?

- `useEffect` is a **React Hook** used to handle **side effects** in functional components.
- It is a normal JavaScript function provided by React with special capabilities.

### Why do we need `useEffect`?

In React, components should ideally be **pure functions**:

- They take props/state
- Return UI (JSX)

👉 But real-world apps need to perform operations **outside rendering**

These are called **side effects**

### What are Side Effects?

Side effects are operations that:

- Interact with the outside world
- Do not directly return UI

### Examples of Side Effects

- API calls (fetch data)
- Event listeners
- Timers (`setTimeout`, `setInterval`)
- DOM manipulation
- Logging

## KeyPoint

- We use `useEffect` when something needs to happen immeadiately after the component renders.

# 4. What is Optional Chaining?

- **Optional Chaining (?.)** is JavaScript feature that allows to `safely access deeply nested object properties` without causing errors if something is `null` or `undefined`.

### 🧠 Problem Without Optional Chaining

```javascript
const user = {};
console.log(user.profile.name);
```

This throws an error because `profile` is undefined.

```javascript
console.log(user?.profile?.name);
```

With using optional Chaining instead of crashing, it safely returns undefined.

# 5. What is Shimmer UI?

- **Shimmer UI** is a loading placeholder effect used to indicate that content is **being Loaded**.
- It displays a **Skeleton layout** of the UI.
- shows a **Shimmering animation**
- gives user a sense that content is loading.

### Why do we use Shimmer UI?

Instead of showing:

- ❌ Blank screen
- ❌ Simple "Loading..." text

👉 We show:

- ✅ UI-like placeholders

# 6. What is the difference between JS expression and JS statement

### What is a JavaScript Expression?

- An **expression** is any piece of code that **produces a value**.
- It can be evaluated to something.

---

### 📌 Examples:

```javascript
2 + 3; // 5
('Hello'); // string
true; // boolean
x * 10; // value based on x
```

👉 These all return a value

### What is a JavaScript Statement?

- A statement is a piece of code that performs an action.
- It does NOT necessarily return a value

### Examples:

```javascript
let x = 10; // declaration
if (x > 5) {
} // condition
for (let i = 0; i < 5; i++) {} // loop
```

# 7. What is Conditional Rendering, explain with a code example

## ⚛️ What is Conditional Rendering?

- **Conditional Rendering** in React means **rendering different UI based on certain conditions**.
- It allows you to show or hide elements depending on:
  - State
  - Props
  - Conditions

## 🔥 Example 1: Using Ternary Operator

```jsx
const App = () => {
  const isLoggedIn = true;

  return (
    <div>{isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}</div>
  );
};
```

# 8. What is CORS?

- **CORS (Cross-Origin Resource Sharing)** is a security mechanism used by the browsers.
- It allows or restricts a web application to **access resources from another origin** using HTTP headers.

# 9. What is async and await?

### What is async?

- **Async** is a keyword that is used before a function to create a async Function.
- It is written as follows:

```javascript
async function getData()
```

- **The important thing to note is that `Async` function always return a `promise`.**

### What is async?

- **Await** is a keyword that can only be used inside a `Async` function.
- **It is used in front of the Promise and it resolves the `promise`.**
- Used as below:

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved Value!!');
  }, 10000);
});
```

### What is `Async Await`?

- **Async Await** is just a syntactical sugar over native methods like .then() and .catch().
- JavaScript at the back uses the same then and catch but the difference is the code readibility.
- Used as below:

```javascript
// USING async await
async function handlePromise() {
  const val = await p;
  console.log('Namaste JavaScript');
  console.log(val);
}
handlePromise();
```

# 10. What is the use of `const json = await data.json();` in getRestaurants()

- When we fetch the data using `fetch` Web API we get response which is not actual JSON data.
- It is a `Response object`.
- And to convert the Response Object into JSON data we do `const json = await data.json();`
- The **Flow** goes like:

```jsx
fetch() → Response Object → .json() → Actual Data
```
