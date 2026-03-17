## crossorigin

crossorigin is an HTML attribute used when loading resources(like scripts, images, etc.) from a different domain(cross-origin).

In Simple words:
It controls whether the browser should send credentials and how it should request resources from another domain.

# Example

<script src="https://example.com/script.js" crossorigin="anonymous"></script>

Here the browser loads a script from another domain and uses CORS rules.

# Where crossorigin is Used

1. <script>
2. <img>
3. <link>
4. <audio>
5. <video>

# Types of crossorigin

1. Anonymous
   <script src="app.js" crossorigin="anonymous"></script>

   -- Browser does NOT send credentials
   -- No cookies
   -- No authentication headers
   -- Most commonly used

2. use-credentials
   <script src="app.js" crossorigin="use-credentials"></script>
   -- Browser sends credentials
   -- Cookies
   -- HTTP authentication
   --Client certificate

# Why It Is Important

1. Security (CORS rules)
   Browsers block some cross-origin resources unless the server allows them.

2. Error reporting for CDN scripts
   You get real error stack traces.
