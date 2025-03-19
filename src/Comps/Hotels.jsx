import React, { useEffect } from 'react';
import HotelCard from './HotelCard';

const Hotels = ({ filteredHotels }) => {
  return (
    <div className='hotelsWrapper'>
      {filteredHotels?.map((hotel, index) => {
        return <HotelCard key={hotel + index} hotel={hotel} />;
      })}
    </div>
  );
};

export default Hotels;
