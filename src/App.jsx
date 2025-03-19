import { use, useEffect, useState } from 'react';
import './App.css';
import Footer from './Comps/Footer';
import Hotels from './Comps/Hotels';
import Nav from './Comps/Nav';
import Search from './Comps/Search';
import axios from 'axios';
import { fetchDataGeneral } from './MokcropsGDReplica';
import { fetchHotelsInCity } from './MokcropsCDReplica';

function App() {
  const [cities, setCities] = useState([]);
  const [hotelsInCity, setHotelsInCity] = useState({});
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchOn, setSearchOn] = useState(false);
  const [searchQueries, setSearchQueries] = useState({
    checkIn: '2025-06-22',
    checkOut: '2025-12-05',
    adultsNum: 1,
    childrenNum: 0,
  });
  const [searchInputs, setSearchInputs] = useState({
    destination: '',
    checkIn: '2025-06-22',
    checkOut: '2025-12-05',
    adultsNum: 1,
    childrenNum: 0,
    roomType: 'Single',
  });

  ///the free version of Mokcorps api has finished due to too many api calls so i am doing a replica
  const apiKey = import.meta.env.VITE_MACKORPS_APIKEY;
  let configGeneral = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.makcorps.com/mapping?api_key=${apiKey}&name=the%20lenox`,
  };

  const currentCity = cities.find(
    (city) => city?.cityName === searchInputs.destination
  );

  let configCity = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.makcorps.com/city?api_key=${apiKey}&cityid=${currentCity?.cityId}&checkin=${searchQueries?.checkIn}&checkout=${searchQueries?.checkOut}&pagination=1&cur=USD&rooms=1&adults=${searchQueries?.adultsNum}&children=${searchQueries.childrenNum}`,
  };

  // initial useEffect api call to get all cities and ids
  useEffect(() => {
    fetchDataGeneral(configGeneral)
      .then((data) => {
        setCities(data);
        setSearchInputs({ ...searchInputs, destination: data[0].cityName });
        setLoading(false);
      })
      .catch((error) => setError(error));

    return () => {};
  }, []);

  //  useEffect api call to get all hotels in city

  useEffect(() => {
    fetchHotelsInCity(configCity, currentCity?.cityId)
      .then((data) => {
        setHotelsInCity(...data);
        setLoading(false);
      })
      .catch((error) => setError(error));

    return () => {};
  }, [cities, searchOn]);

  //  useEffect  for manual filtration
  useEffect(() => {
    const filterHotels = () => {
      // const filtered = hotelsInCity?.data?.filter((hotel) => {
      //   return Object.keys(searchQueries).every(
      //     (query) =>
      //       hotel.hasOwnProperty(query) &&
      //       (hotel[query] === searchQueries[query] ||
      //         hotel[query].includes(searchQueries[query]))
      //   );
      // });
      // setFilteredHotels(filtered);

      const filtered = hotelsInCity?.data?.filter((hotel) => {
        return (
          new Date(searchQueries.checkIn) >= new Date(hotel.availableDate[0]) &&
          new Date(searchQueries.checkOut) <=
            new Date(hotel.availableDate[1]) &&
          searchQueries.adultsNum <= hotel.adultsCapacity &&
          searchQueries.childrenNum <= hotel.childrenCapacity &&
          hotel.roomTypes.includes(searchInputs.roomType)
        );
      });

      setFilteredHotels(filtered);
    };
    filterHotels();
    return () => {};
  }, [hotelsInCity, searchOn]);

  //  useEffect  for manual error handling
  useEffect(() => {
    if (filteredHotels?.length && cities?.length && Object.keys(hotelsInCity)) {
      setError('');
    } else {
      setError(
        'Sorry there was a problem try searching again with different values'
      );
    }
  }, [cities, hotelsInCity, filteredHotels]);

  return (
    <>
      <Nav />
      <Search
        searchQueries={searchQueries}
        setSearchQueries={setSearchQueries}
        searchInputs={searchInputs}
        setSearchInputs={setSearchInputs}
        cities={cities}
        setSearchOn={setSearchOn}
        setLoading={setLoading}
      />

      {loading || error ? (
        error ? (
          <h1 className='errorMess'>{error}</h1>
        ) : (
          <h1 className='loading'>Loading...</h1>
        )
      ) : (
        <Hotels
          filteredHotels={filteredHotels}
          setFilteredHotels={setFilteredHotels}
          hotelsInCity={hotelsInCity}
          searchQueries={searchQueries}
          setError={setError}
        />
      )}

      <div className='backGroundImage'></div>
      <Footer />
    </>
  );
}

export default App;
