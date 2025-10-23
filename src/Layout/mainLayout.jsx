import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 

            <div>
            <Outlet></Outlet>
            <Toaster position="top-center" reverseOrder={false} />
            </div> 

            <Footer></Footer>       
            
        
        </div>
    );
};

export default HomeLayout;