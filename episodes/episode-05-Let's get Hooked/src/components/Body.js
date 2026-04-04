import { useState } from 'react';
import RestaurantData from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (item) => item.rating > 4,
            );
            setListOfRestaurants(filterRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((item) => (
          <RestaurantCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
