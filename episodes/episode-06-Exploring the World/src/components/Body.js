import { useEffect, useState } from 'react';
import RestaurantData from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4,
            );
            setListOfRestaurants(filterRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((item) => (
          <RestaurantCard key={item.info.id} data={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
