import React from 'react';
import { createRoot } from 'react-dom/client';

// React.createElement
// Now I am using React 19. For it refer the deep-dive to understand more about why reactDom.render is not used

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'My Name is Anuj and reverse of my name is Juna',
);
console.log(heading);

const jsxHeading = <h1 id="heading">Namaste React</h1>;
console.log(jsxHeading);

const root = createRoot(document.getElementById('root'));

root.render(heading);
