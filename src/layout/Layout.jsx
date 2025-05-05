import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div  className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;