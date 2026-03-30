import React from 'react';
import { createRoot } from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
        />
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h1>Search</h1>
      </div>
      <div className="restaurant-container">
        <div className="restaurant-card">
          <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" />
          <div className="restaurant-details">
            <h1>Chicken Biryani</h1>
            <h2>Rating</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <h1 className="app">
      <Header />
      <Body />
    </h1>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout />);
