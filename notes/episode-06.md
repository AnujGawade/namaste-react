# Part-1

## Monolith Architecture

In the past, we used to build large applications where everything was bundled together.

- Imagine building an entire application where all the code - API's, database connections, backend, authenticaion even notification services - reside in one massive project with single code bse.
- This method of development where all the teams work on a single code base is known as `Monolith Architecture`.
- In this all the teams works in the same project, everybody used to **work on the same repository**.

## Microservice Architecture

The idea to split application into a set of smaller, interconnected services instead of building a single monolothic application.

- Each service handles it own specific job, like handling user accounts or managing payments. And this is known as `Separation of concerns` and `Single Responsibility principle`.
- This method of development where each teams works on a different services and no other teams interfering is known as `MicroService Architecture`.
- In this all the teams works on their own independent services, everybody used to **work on the different repository of their services**.
- Meaning each team Suppose backend project, they will have their own deployment cycle and everthing is seperate.
- Now to make the application run, we need all these services communicate with each other Right? How do we do that then?

### How these Services interact with each other?

- These services interact with each other using Ports. - Meaning each service run on its specific port.
- That means they are deployed independently, which are then mapped to a domain name and communicate with each other.

# Part-2

## Rendering Data from API in React

When fetching data from an API in React, there are **two common approaches**:

---

## 🚀 1. Fetch Data Before Rendering

### 🔄 Flow:

**Component Loads → API Call → Render UI**

### 📌 Explanation:

- Component waits for API response
- Once data is received → UI is rendered

### ⚠️ Drawback:

- Slower user experience
- Blank screen until data loads

---

## 🚀 2. Render First, Then Fetch Data (Recommended ✅)

### 🔄 Flow:

**Component Loads → Render UI → API Call → Re-render with Data**

### 📌 Explanation:

- UI loads immediately (fast)
- API call happens in background
- Once data arrives → React updates UI

---

## 🧠 Why is Approach 2 better?

- ⚡ Faster perceived performance
- 🎯 Better user experience
- 📱 Allows loading states (shimmer, spinner)

### **In React, we will mostly use the Approach 2.**

# 📘 Part 3 – useEffect (React Hook)

### ⚛️ What is `useEffect`?

`useEffect` is a **React Hook** used to handle **side effects** in functional components.

👉 It is a normal JavaScript function provided by React with special capabilities.

### 📌 Syntax

```javascript
useEffect(() => {}, []);
```

---

### 🧠 Arguments of useEffect

useEffect takes two arguments:

1. Callback Function - Contains the logic (API call, event listener, etc.)

2. Dependency Array - Controls when the effect should runs

---

### ❓ When does useEffect run?

👉 The callback function runs after the component renders

📌 Important:

- If something needs to happen after rendering, it should be written inside useEffect

---

### 🔄 Different Behaviors of useEffect

**1. No Dependency Array**

```javascript
useEffect(() => {
  console.log('Runs on every render');
});
```

👉 Runs on:

- Initial render
- Every re-render

**2. Empty Dependency Array `[]`**

```javascript
useEffect(() => {
  console.log('Runs only once');
}, []);
```

👉 Runs only:

- Once (on component mount)

**3. With Dependencies**

```javascript
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```

👉 Runs when:

- count changes

---

## ⚛️ What will be printed first: `useEffect()` or `console.log()`?

```javascript
useEffect(() => {
  console.log('useEffect Rendered');
}, []);

console.log('Body rendered');
```

### ✅ Output Order

```javascript
Body rendered
useEffect Rendered
```

### 🧠 Why does this happen?

**🔄 Step-by-step execution:**

1. React starts rendering the component
2. It executes code line by line
3. Encounters useEffect

- Does NOT execute it immediately ❌
- Registers the callback to run later

4. Executes console.log("Body rendered") ✅
5. Component render completes
6. Now React runs useEffect callback

---

### **When I made an API call to NamasteDev.com api, I was getting an error of `Access to fetch at "https://namastedev.com/api/v1/listRestaurants" from origin "http:localhost:1234" has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested Resource.`**

❌ Who is blocking us?
Our browsers block us to call API from one origin to a different origin.

- Our Browser, means chrome is blocking me from making an API call to Namastedev.com.
- So If there is origin mismatch, the browser blocks the API call. This is the `CORS Policy`.
