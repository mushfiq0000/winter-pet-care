import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 

            <div>
            <Outlet></Outlet>
            </div> 

            <Footer></Footer>       
            
        
        </div>
    );
};

export default HomeLayout;