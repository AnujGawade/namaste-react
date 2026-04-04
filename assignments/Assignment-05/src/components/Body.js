import { useState } from 'react';
import RestaurantData from '../utils/RestaurantData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [search, setSearch] = useState('');

  const filteredResults = RestaurantData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="restaurant-container">
        {filteredResults.map((item) => (
          <RestaurantCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
