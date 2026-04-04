# ⚙️ React Fiber Explanation (Using Restaurant Example)

---

## 🧠 What is React Fiber Algorithm?

React uses a **Reconciliation Algorithm**, and its modern implementation is called **React Fiber**.

👉 In **React 16**, Fiber replaced the old algorithm.

### 🔥 Key Difference:

- Old React → synchronous diffing (blocking)
- Fiber → **incremental, interruptible, priority-based diffing**

---

# 🍽️ Example: Restaurant Cards

## 📦 Initial UI

```html
<div class="res-container">7 Restaurant Cards</div>
```

---

## 🧩 Step 1: Fiber Tree Creation

When React renders this:

👉 It creates a **Fiber Tree** (not just virtual DOM)

Each component becomes a **fiber node (unit of work)**

### Structure:

```
ResContainer Fiber
   ↓ child
Restaurant1 Fiber → sibling → Restaurant2 → ... → Restaurant7
```

📌 Each card = one **fiber (unit of work)**

---

## 🔄 Step 2: UI Update (Filter 7 → 3)

Now user filters:

👉 Only 3 restaurant cards should remain

---

## ⚡ Step 3: New Fiber Tree (Work-in-Progress Tree)

React creates a **new fiber tree**:

```
ResContainer Fiber
   ↓ child
Restaurant2 → Restaurant4 → Restaurant6
```

👉 This is called:

- **Work-in-progress tree**

And the old one is:

- **Current tree**

These are connected via:
👉 `alternate`

---

## 🔍 Step 4: Diffing (Fiber Reconciliation)

React compares:

👉 Old Fiber Tree vs New Fiber Tree

---

### 💡 Diff Result:

| Old         | New | Action |
| ----------- | --- | ------ |
| Restaurant1 | ❌  | DELETE |
| Restaurant2 | ✅  | KEEP   |
| Restaurant3 | ❌  | DELETE |
| Restaurant4 | ✅  | KEEP   |
| Restaurant5 | ❌  | DELETE |
| Restaurant6 | ✅  | KEEP   |
| Restaurant7 | ❌  | DELETE |

👉 Total:

- 4 fibers marked for deletion

---

## ⏸️ Step 5: Incremental Work (Fiber Magic)

👉 Fiber does NOT process everything at once

Instead:

- Processes one fiber at a time
- Checks priority
- Can pause ⏸️
- Can resume ▶️

---

### 🧠 Example:

- User click → HIGH priority
- Rendering list → MEDIUM priority

👉 React can:

- Pause rendering
- Handle user interaction
- Resume rendering later

---

## 🎯 Step 6: Effect List Creation

Fiber builds a list of changes:

```
Delete: Restaurant1, 3, 5, 7
Keep: Restaurant2, 4, 6
```

👉 Called:

- **Effect list (side effects list)**

---

## 🖥️ Step 7: Commit Phase (DOM Update)

React updates the real DOM:

- Removes 4 nodes
- Keeps 3 nodes

📌 This phase is:

- Synchronous
- Fast

---

## 🔥 Final Flow

```
1. setState triggered
2. New Fiber Tree created
3. Diff with old tree
4. Work split into units (fibers)
5. Scheduler processes based on priority
6. Effect list created
7. Commit changes to DOM
```

---

## 🧠 Key Differences

| Traditional React   | React Fiber        |
| ------------------- | ------------------ |
| Virtual DOM diffing | Fiber Tree diffing |
| One-shot update     | Incremental update |
| No priority         | Priority-based     |
| Blocking            | Non-blocking       |
| Cannot pause        | Can pause/resume   |

---

## 💡 Final Definition

> React Fiber creates a work-in-progress fiber tree, compares it with the current tree, breaks updates into units of work, prioritizes them, and efficiently commits only the necessary changes to the DOM.

---

## 🚀 Mental Model

> React Fiber deletes 4 restaurant fibers, keeps 3, and processes the updates in small chunks while allowing high-priority user interactions to run smoothly.

---
