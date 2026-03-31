# 📘 Part 1 – Planning & Props (React Notes)

---

## 🧠 Planning Before Building an App

Whenever you are asked to build an application, the **first step is planning**.

> ✅ Good Planning = Easy Building

### 📌 Why Planning is Important:

- Helps you visualize the app structure
- Makes coding easier and faster
- Reduces confusion during development

### 🛠️ What to do in Planning:

1. Create a **wireframe/mock UI**
2. Decide:
   - Layout (Header, Body, Footer)
   - Components structure
3. Do **low-level design**:
   - What components are needed?
   - How data will flow?

👉 Once you have a clear visual structure, coding becomes much easier.

---

## ⚛️ Props in React

### 📌 What are Props?

**Props (short for Properties)** are used to **pass data from one component to another**.

- Props are **read-only**
- They help in making components **dynamic and reusable**

---

### 🧠 Key Understanding:

A React component is just a **JavaScript function**.

👉 So:

- **Props = Arguments to a function**

---

### 📥 Passing Props

```jsx
<RestaurantCard resName="KFC" cuisine="Chinese, Asian" />
```

### 📥 Receiving Props

1.  Basic Way

```javascript
const RestaurantCard = (props) => {
  return <h3>{props.resName}</h3>;
};
```

2. Destructuring (Cool Developer's way)

```javascript
const RestaurantCard = ({ resName, cuisine }) => {
  return <h3>{resName}</h3>;
};
```

## ⚙️ Config Driven UI (Important for Frontend System Design)

Config Driven UI means controlling how the UI looks using data/config, usually coming from the backend.

👉 Instead of hardcoding UI, we render it dynamically based on data.

### 📌 Example Concept:

```javascript
const restaurants = [
  { id: 1, name: 'KFC' },
  { id: 2, name: 'Dominos' },
];
```

```javascript
restaurants.map((res) => <RestaurantCard key={res.id} resName={res.name} />);
```

## 🔑 Why do we need a key while mapping?

- React uses key to identify elements uniquely
- Helps React optimize rendering (Reconciliation)

### 👉 Without a key:

- React may re-render the entire list
- Performance becomes worse
- Important While maping data from config why we do we need to give a key.

## ⚠️ Why NOT to use index as key?

- If list order changes (insert/delete/reorder):
- React gets confused
- Leads to unexpected UI bugs

### 👉 Example problem:

- New item added at the top
- React re-renders everything incorrectly

### ✅ Best Practice:

- Always use a unique and stable id (like id from backend)

## ⚠️ When is index okay?

- When:
  - List is static (no changes)
  - No reordering/filtering

👉 Still, not recommended in most real-world cases
