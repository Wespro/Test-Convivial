import React, { useRef } from 'react';
import { roomTypes } from './roomTypesArr';

const Search = ({
  searchQueries,
  setSearchQueries,
  cities,
  setSearchOn,
  searchInputs,
  setSearchInputs,
}) => {
  const form = useRef(null);
  const handelInputs = (e) => {
    const { name, value } = e.target;
    setSearchInputs({ ...searchInputs, [name]: value });
    searchQueries.hasOwnProperty(name) &&
      setSearchQueries({ ...searchQueries, [name]: value });
  };
  const handelSearchBtn = (e) => {
    const result = form.current.checkValidity();
    if (result) {
      e.preventDefault();
      setSearchOn(true);
      setTimeout(() => setSearchOn(false), 0);
    }
  };
  // useEffect(() => {

  //   return () => {

  //   }
  // }, []);
  return (
    <div className='searchWrapper'>
      <form ref={form}>
        <div className='controls'>
          <label className='destinationLable' htmlFor='destination'>
            Destination
            <select
              name='destination'
              id='destination'
              onChange={handelInputs}
              value={searchInputs.destination}
              required
            >
              {cities.map((city, index) => {
                if (city !== null) {
                  return (
                    <option key={city.cityName + index} value={city.cityName}>
                      {city.cityName}
                    </option>
                  );
                }
                return null;
              })}
            </select>
          </label>
          <label htmlFor='checkIn'>
            Check In Date
            <input
              type='date'
              name='checkIn'
              id='checkIn'
              value={searchInputs.checkIn}
              onChange={handelInputs}
              required
            />
          </label>
          <label htmlFor='checkOut'>
            Check out Date
            <input
              type='date'
              name='checkOut'
              id='checkOut'
              onChange={handelInputs}
              value={searchInputs.checkOut}
              required
            />
          </label>
          <label htmlFor='adultsNum'>
            How Many adults?
            <input
              type='number'
              name='adultsNum'
              id='adultsNum'
              onChange={handelInputs}
              value={searchInputs.adultsNum}
              required
              max={30}
              min={1}
            />
          </label>
          <label htmlFor='adultsNum'>
            How Many adults ?
            <input
              type='number'
              name='childrenNum'
              id='childrenNum'
              onChange={handelInputs}
              value={searchInputs.childrenNum}
              max={10}
              required
            />
          </label>
          <label htmlFor='roomTypes '>
            Rooms
            <select
              onChange={handelInputs}
              value={searchInputs.roomTypes}
              name='roomType'
              id='roomType'
              required
            >
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <button onClick={handelSearchBtn} className='search'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
