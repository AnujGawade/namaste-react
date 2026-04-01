import React from "react";
import { createRoot } from "react-dom/client";
import { FaRegUser } from "react-icons/fa";

// 1. Using React.createElement
const Title = () =>
  React.createElement("div", { className: "title" }, [
    React.createElement("h1", { key: "h1" }, "I'm a h1 Tag."),
    React.createElement("h2", { key: "h2" }, "I'm a h2 Tag."),
    React.createElement("h3", { key: "h3" }, "I'm a h3 Tag."),
  ]);

// 2. Using React.createElement
const TitleJSX = () => (
  <div className="title">
    <h1>I'm a h1 Tag.</h1>
    <h2>I'm a h2 Tag.</h2>
    <h3>I'm a h3 Tag.</h3>
  </div>
);

// 3. Functional Component (JSX)
const TitleComponent = () => {
  return (
    <div className="title">
      <h1>I'm a h1 Tag.</h1>
      <h2>I'm a h2 Tag.</h2>
      <h3>I'm a h3 Tag.</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
        />
      </div>
      <div className="search-container">
        <input />
      </div>
      <div className="icon">
        <FaRegUser />
      </div>
    </div>
  );
};

//  4. Passing Attributes in JSX
const TitleWithProps = () => (
  <div className="title" id="main-title">
    <h1 style={{ color: "red" }}>I'm a styled h1</h1>
  </div>
);

// Component Composition
const App = () => {
  return (
    <div className="container">
      <Title />
      <Header />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
