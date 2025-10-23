import React, { use } from "react";
import "animate.css";
import { ContextData } from "../Context/ContextData";
import Skeleton from "../loading/skeleton";
import { Link } from "react-router";

const ServicesPage = () => {
  const { data, loading } = use(ContextData);

  if (loading) {
    return <Skeleton></Skeleton>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 animate__animated animate__fadeInDown">
        ❄️ Winter Care Services for Your Pets 🐾
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service, index) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate__animated animate__fadeInUp"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationIterationCount: 1,
            }}
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex justify-between items-center mb-3">
                <span className="text-blue-700 font-semibold text-lg">
                  ${service.price}
                </span>
                <span className="text-yellow-500 font-bold">
                  ⭐ {service.rating}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Category: {service.category}</span>
                <span>Slots: {service.slotsAvailable}</span>
              </div>
              <Link to={`/view-details/${service.serviceId}`}>
                <button className="w-full mt-5 bg-blue-400 hover:bg-blue-500  text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
