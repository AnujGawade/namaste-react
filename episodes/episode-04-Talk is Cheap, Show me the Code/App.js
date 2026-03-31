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

const RestaurantCard = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
        />
        <div className="restaurant-details">
          <h3>Hong Kong</h3>
          <h4>Chinese, Biryani, Asian</h4>
          <h4>4.4 Stars</h4>
          <h4>38 Minutes</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
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
