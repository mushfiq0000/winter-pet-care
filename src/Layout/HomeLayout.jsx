import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 

            <div>
            <Outlet></Outlet>
            </div>        
            
        
        </div>
    );
};

export default HomeLayout;