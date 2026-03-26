# 🚨 Cross-Site Scripting (XSS)

## 📌 What is XSS?

XSS (Cross-Site Scripting) is a security vulnerability where an attacker injects malicious JavaScript into a trusted website.

When users load the page, the script executes in their browser.

---

## ⚡ Why it's Dangerous

- Steals cookies (session hijacking)
- Captures user input (passwords, forms)
- Redirects users to malicious sites
- Performs actions on behalf of users

---

## 🧠 Types of XSS

### 1. Stored XSS (Persistent)

Malicious script is stored in a database and executes whenever users
load the page.

#### Example:

```html
<script>
  alert('Hacked');
</script>
```

#### 📍 Found in:

- Comments
- User profiles
- Forums

---

### 2. Reflected XSS (Non-Persistent)

Script comes from URL or request and is reflected immediately in the
response.

#### Example:

    https://example.com?q=<script>alert(1)</script>

#### 📍 Found in:

- Search bars
- Query parameters

---

### 3. DOM-Based XSS

Happens entirely on the client-side due to unsafe DOM manipulation.

#### Example:

```javascript
document.innerHTML = location.hash;
```

---

## 🛡️ Prevention Techniques

### 1. Input Validation

- Never trust user input
- Validate & sanitize all inputs

---

### 2. Output Escaping

```javascript
& → &amp;
< → &lt;
> → &gt;
```

---

### 3. Use Safe APIs

❌ Avoid:

```javascript
innerHTML;
```

✅ Use:

```javascript
textContent;
```

---

### 4. Framework Protection

Modern frameworks like React, Angular, Vue: - Automatically escape
data - Still be careful with dangerous APIs like
`dangerouslySetInnerHTML`

---

## 🎯 Interview Answer

"XSS is a vulnerability where attackers inject malicious scripts into
web pages, which execute in the user's browser. It can be prevented
using input validation, output escaping, and safe DOM manipulation
techniques."
