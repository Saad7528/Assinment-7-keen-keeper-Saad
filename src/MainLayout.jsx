import React from 'react';
import Navbar from './Component/SharedComponent/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Component/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;