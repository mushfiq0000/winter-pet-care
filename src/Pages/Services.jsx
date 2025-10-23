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

  const handelBookNow = () => {
    console.log("click");
    return(
      alert("done")
    )
  };

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
            </div>
          </div>
        ))}
      </div>
      {/* Use Modal */}

      <div className="flex justify-center py-10">
        <button
          className="btn w-1/3 rounded-lg mt-2 bg-blue-400 text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Book Now
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box  bg-white/80">
            <h1 className="text-5xl font-bold text-center">Book Service!</h1>
            <form onSubmit={handelBookNow}>
              <fieldset className="fieldset">
                <label className="font-semibold">Name</label>
                <input
                  type="tect"
                  className="input border-2 w-full bg-white/70 rounded-lg"
                  placeholder="Name"
                  required
                />

                <label className=" font-semibold">Email</label>
                <input
                  type="email"
                  className="input border-2 w-full bg-white/70 rounded-lg"
                  placeholder="Email"
                  required
                />

                <button className="btn btn-neutral hover:bg-white/70  mt-4 rounded-lg">
                  Book Now
                </button>
              </fieldset>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServicesPage;
