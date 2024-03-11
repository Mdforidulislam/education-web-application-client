import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Navbar/Nav';
import Fotter from '../../Components/Fotter/Fotter';

const MainLayout = () => {
    return (
        <div>
          <Nav/>
          <Outlet/>  
          <Fotter/>
        </div>
    );
};

export default MainLayout;