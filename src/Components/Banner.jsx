import React, { useContext } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextData } from '../Context/ContextData';
import Slider from 'react-slick';
import { Link } from 'react-router';

const Banner = () => {
  const { data, loading } = useContext(ContextData);

  if (loading) {
    return <div className="text-center py-10 text-lg text-gray-500">Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
  };

  return (
    <div className="flex justify-center py-10">
      <div className="relative w-80 h-80 md:w-2/3 md:h-140  overflow-hidden rounded-2xl shadow-xl">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.image}
                alt={item.serviceName}
                className="w-80 h-80 md:w-full md:h-140 object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {item.serviceName}
                </h1>
                <p className="text-lg md:text-xl drop-shadow-md mb-5 max-w-2xl">
                  {item.description}
                </p>
                <Link
                  to="/services"
                  className="btn bg-transparent border border-blue-300 text-blue-200 hover:bg-blue-300 hover:text-white"
                >
                  Explore Service
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;