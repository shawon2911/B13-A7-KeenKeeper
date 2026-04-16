import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Shared/Footer/Footer';
import ScrollTop from '../Components/Shared/ScrollTop/ScrollTop';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <ScrollTop />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;