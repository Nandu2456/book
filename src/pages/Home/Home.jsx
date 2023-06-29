import React from 'react';
import Header from '../../components/Header/Header.js';
import Login from '../../components/Login.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
       <Header/>
       <Outlet/>
    </main>
  )
}

export default Home