import React from 'react';

const HotelCard = () => {
  return (
    <div className='hotelCard'>
      <div className='imageWrapper'>
        <img
          src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='hotel image'
        />
      </div>
      <div className='hotelInfo'>
        <h2 className='hotelTitle'>Hotel Title</h2>
        <div className='pricePerNight'>
          <h3>price Per Night:</h3>
          <p className='price'>30$</p>
        </div>
        <label htmlFor='roomTypes'>
          <h3>Room Types:</h3>
          <select name='roomTypes' id='roomTypes'>
            <option value='single'>Single</option>
          </select>
        </label>
      </div>
      <button className='book'>Book</button>
    </div>
  );
};

export default HotelCard;
