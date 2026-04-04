import { createRoot } from 'react-dom/client';
import { FaRegUser } from 'react-icons/fa';

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<AppLayout />);
