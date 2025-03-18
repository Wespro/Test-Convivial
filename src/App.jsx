import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Comps/Footer';
import Hotels from './Comps/Hotels';
import Nav from './Comps/Nav';
import Search from './Comps/Search';
import axios from 'axios';
import {
  fetchDataGeneral,
  fetchHotelsInCity,
  mokcropsReplica,
} from './MokcropsReplica';

function App() {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQueries, setSearchQueries] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adultsNum: 1,
    childrenNum: 0,
    roomTypes: '',
  });

  ///the free version of Mokcops api has finished due to too many api calls so i am doing a replica
  const apiKey = import.meta.env.VITE_MACKORPS_APIKEY;
  let configGeneral = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.makcorps.com/mapping?api_key=${apiKey}&name=the%20lenox`,
  };

  const currnetCity = cities.find(
    (city) => city.cityName === searchQueries.destination
  );
  let configCity = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.makcorps.com/city?api_key=${apiKey}&cityid=${currnetCity?.cityId}&checkin=${searchQueries?.checkIn}&checkout=${searchQueries?.checkOut}&pagination=1&cur=USD&rooms=1&adults=${searchQueries?.adultsNum}&children=${searchQueries.childrenNum}`,
  };

  // initial useEffect api call to get all cities and ids
  useEffect(() => {
    fetchDataGeneral(configGeneral)
      .then((data) => {
        setCities(data);
        setSearchQueries({ ...searchQueries, destination: data[0].cityName });
        setLoading(false);
      })
      .catch((error) => setError(error));

    return () => {};
  }, []);
  //  useEffect api call to get all hotels in city
  // useEffect(() => {
  // fetchHotelsInCity(configCity).then((data) => {
  //   setCities(data);
  // });
  //
  //   return () => {};
  // }, [Hotels]);
  return (
    <>
      <Nav />
      <Search
        searchQueries={searchQueries}
        setSearchQueries={setSearchQueries}
        cities={cities}
      />

      {loading || error ? (
        error ? (
          <h1 className='errorMess'>{error}</h1>
        ) : (
          <h1 className='loading'>Loading...</h1>
        )
      ) : (
        <Hotels />
      )}

      <div className='backGroundImage'></div>
      <Footer />
    </>
  );
}

export default App;
