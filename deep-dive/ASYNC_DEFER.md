# Async vs Defer in JavaScript

## What are `async` and `defer`?

`async` and `defer` are attributes of the `<script>` tag used to load
JavaScript without blocking HTML parsing.

------------------------------------------------------------------------

## How Browser Works

1.  HTML Parsing
2.  Script Fetching (download)
3.  Script Execution

------------------------------------------------------------------------

## 1. Normal Script (Blocking)

``` html
<script src="app.js"></script>
```

-   HTML parsing starts\
-   Browser finds `<script>`\
-   Parsing stops\
-   Script is fetched and executed\
-   Parsing resumes

------------------------------------------------------------------------

## 2. Async Script

``` html
<script src="app.js" async></script>
```

-   HTML parsing continues\
-   Script is fetched in parallel\
-   As soon as script is ready → parsing pauses\
-   Script executes immediately\
-   Parsing resumes

### Key Points

-   Execution order is NOT guaranteed

------------------------------------------------------------------------

## 3. Defer Script

``` html
<script src="app.js" defer></script>
```

-   HTML parsing continues\
-   Script is fetched in parallel\
-   Executes only after HTML parsing completes\
-   Execution order is maintained

------------------------------------------------------------------------

## Final Comparison

  Feature               Normal             Async                    Defer
  --------------------- ------------------ ------------------------ ------------------
  Blocks HTML parsing   Yes                Sometimes                No
  Fetching              After stop         Parallel                 Parallel
  Execution             Immediately        Immediately when ready   After parsing
  Order guaranteed      Yes                No                       Yes
  Best for              Critical scripts   Analytics                Main app scripts

------------------------------------------------------------------------

## When to Use

### Use `defer`

-   Main JS files
-   When order matters

### Use `async`

-   Analytics
-   Ads
-   Tracking scripts

------------------------------------------------------------------------

## Interview Answer

"`async` and `defer` are used to load scripts without blocking HTML
parsing. Async executes as soon as it's downloaded and doesn't guarantee
order, while defer executes after HTML parsing completes and maintains
order."
