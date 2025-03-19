import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className='hotelCard'>
      <div className='imageWrapper'>
        <img src={hotel.image_url} alt={hotel.name} />
      </div>
      <div className='hotelInfo'>
        <h2 className='hotelTitle'>{hotel.name}</h2>
        <div className='pricePerNight'>
          <h3>price Per Night:</h3>
          <p className='price'>{hotel.price1} </p>
        </div>
        <label htmlFor='roomTypes'>
          <h3>Room Types:</h3>
          <select name='roomTypes' id='roomTypes'>
            {hotel.roomTypes.map((type, index) => {
              return (
                <option key={type + index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <button className='book'>Book</button>
    </div>
  );
};

export default HotelCard;
