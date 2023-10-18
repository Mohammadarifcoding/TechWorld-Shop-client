import React from 'react';
import Banner from './Banner/Banner';
import Showroom from './Showroom/Showroom';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const showRoom = useLoaderData()
    return (
        <div>
          <Banner></Banner> 
          <Showroom data={showRoom}></Showroom>
        </div>
    );
};

export default Home;