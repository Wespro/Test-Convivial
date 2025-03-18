import React from 'react';

const Search = ({ searchQueries, setSearchQueries, cities }) => {
  const handelInputs = (e) => {
    const { name, value } = e.target;
    setSearchQueries({ ...searchQueries, [name]: value });
  };
  return (
    <div className='searchWrapper'>
      <form action=''>
        <div className='controls'>
          <label htmlFor='destination'>
            Destination
            <select
              name='destination'
              id='destination'
              onChange={handelInputs}
              value={searchQueries.destination}
              required
            >
              {cities.map((city, index) => (
                <option key={city.cityName + index} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor='checkIn'>
            Check In Date
            <input
              type='date'
              name='checkIn'
              id='checkIn'
              onChange={handelInputs}
              value={searchQueries.checkIn}
              required
            />
          </label>
          <label htmlFor='checkIn'>
            Check In Date
            <input
              type='date'
              name='checkout'
              id='checkout'
              onChange={handelInputs}
              value={searchQueries.checkout}
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
              value={searchQueries.adultsNum}
              required
              max={30}
              min={1}
            />
          </label>
          <label htmlFor='adultsNum'>
            How Many adults ?
            <input
              defaultValue='0'
              type='number'
              name='childrenNum'
              id='childrenNum'
              onChange={handelInputs}
              value={searchQueries.childrenNum}
              max={10}
              required
            />
          </label>
          <label htmlFor='roomTypes '>
            Rooms
            <select
              onChange={handelInputs}
              value={searchQueries.roomTypes}
              defaultValue='SingleRooms'
              name='roomTypes'
              id='roomTypes'
              required
            >
              <option value='all'>All</option>
              <option value='SingleRooms'>Single Rooms</option>
            </select>
          </label>
          <button className='search'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
