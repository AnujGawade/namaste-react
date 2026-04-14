import { useEffect, useState } from 'react';
import RestaurantData from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

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
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );

            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4,
            );

            setFilteredRestaurants(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants?.map((item) => (
          <RestaurantCard key={item.info.id} data={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
