import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ViewDetailsFream from './ViewDetailsFream';

const ViewDetails = () => {
  
  return (
    <div>
      <title>{}</title>
      <header>
        <Navbar />
      </header>
          <main>
            <ViewDetailsFream></ViewDetailsFream>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
      
    </div>
  );
};

export default ViewDetails;