import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";

function filterData(restaurants, input) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.includes(input)
  );
  return filterData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setReataurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(restaurants, searchInput);
            setReataurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
