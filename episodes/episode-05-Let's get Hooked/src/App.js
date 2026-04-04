import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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
