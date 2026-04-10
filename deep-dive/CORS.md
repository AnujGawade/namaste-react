# 🌐 CORS (Cross-Origin Resource Sharing)

---

## 🧠 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security mechanism used by browsers.

👉 It allows or restricts a web application to **access resources from another origin** using HTTP headers.

---

## 📌 What is an Origin?

An origin is defined by:

- Protocol (http / https)
- Domain
- Port

👉 Example:

- `http://example.com` ≠ `https://example.com` (different origin)
- `http://example.com:3000` ≠ `http://example.com:5000`

---

## 🚀 Why CORS is needed?

- Browsers follow **Same-Origin Policy (SOP)**
- SOP blocks requests to different origins ❌

👉 CORS allows controlled access ✅

---

## 🔄 How CORS Works

### 👉 Example:

- App **A** → `http://localhost:3000`
- App **B** → `http://api.example.com`

👉 A wants data from B

---

## ⚙️ CORS Flow

1. A sends a request to B
2. Browser checks if it’s a cross-origin request
3. Browser sends a **Preflight Request (OPTIONS)**

---

## 🔥 What is Preflight Request?

- A **pre-check request** sent by the browser
- Uses HTTP method: `OPTIONS`

---

### 📌 Purpose:

- To check if the actual request is **safe and allowed**

---

### 📤 Request Headers (from browser):

```http
Origin: http://localhost:3000
Access-Control-Request-Method: GET
Access-Control-Request-Headers: Content-Type
```

✅ What happens next?

- If server allows → actual API call is made ✅
- If server denies → request is blocked ❌

⚠️ Important Points

- CORS is enforced by the browser, not server
- Server must send correct CORS headers
- Without proper headers → request fails
