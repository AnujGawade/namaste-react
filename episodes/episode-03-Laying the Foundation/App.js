import React from 'react';
import { createRoot } from 'react-dom/client';

const Title = () => (
  <h1 className="heading">
    Hello My name is Anuj and irony is that reverse of it is JUNA
  </h1>
);

const elem = <span>React Element</span>;

// const title = (
//   <h1 className="heading">
//     {elem}
//     Hello My name is Anuj and irony is that reverse of it is JUNA
//   </h1>
// );

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      {/* <Title /> */}
      {/* Since Title is a component and it a function then we can also call it like below  */}
      {Title()}
      {/* {title} */}
      <h1>Functional Component</h1>;
    </div>
  );
};

const root = createRoot(document.getElementById('root'));

// When Babel see's angular brackets </> and sees a HeadingComponent in it so it understands that there must be some heading component existing there.
root.render(<HeadingComponent />);
