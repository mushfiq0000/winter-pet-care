import { useEffect, useState } from "react";
import { Link } from 'react-router';

const Banner = ({serviceData}) => {

  
  const [current, setCurrent] = useState(0); 
  const data = serviceData || [];

  const slides = data.slice(0,3) 
  
  

  
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [slides]);


  return (

    <div className="flex justify-center py-10 bg-blue-100">
      <div className="relative w-11/12 md:w-2/3 h-150 overflow-hidden rounded-2xl shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.serviceId}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.serviceName}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-3">
                {slide.serviceName}
              </h1>
              <p className="text-lg md:text-xl drop-shadow-md mb-5 max-w-2xl">
                {slide.description}
              </p>
              <Link to="/services" className="btn bg-transparent text-blue-200 hover:bg-blue-300 hover:text-white">
                Explore Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
