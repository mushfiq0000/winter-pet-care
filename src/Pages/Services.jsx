import "animate.css";
import { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ContextData } from "../Context/ContextData";

const ServicesPage = () => {
  const { data, loading } = use(ContextData);

  if (loading) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  const handleBookNow = (e) => {
    e.preventDefault();
    e.target.reset();

    toast.success("🎉 booked successfully!", {
      duration: 3000,
      style: {
        background: "#4ade80",
        color: "#fff",
        fontWeight: "600",
        borderRadius: "10px",
      },
    });
    document.getElementById("my_modal_1").close();

  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-4xl font-bold text-center text-white mb-10 animate__animated animate__fadeInDown">
        ❄️ Winter Care Services for Your Pets 🐾
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {data?.map((service, index) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 animate__animated animate__fadeInUp "
            style={{
              animationDelay: `${index * 0.2}s`,
              animationIterationCount: 1,
            }}
          >
            <div className="h-56 w-full overflow-hidden ">
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500 "
              />
            </div>

            <div className="p-5 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex justify-between items-center mb-3 ">
                <span className="text-blue-700 font-semibold text-lg">
                  ${service.price}
                </span>
                <span className="text-yellow-500 font-bold">
                  ⭐ {service.rating}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Category: {service.category}</span>
                <span>Slots: {service.slotsAvailable}</span>
              </div>

              <button
                className="btn w-full rounded-lg mt-2  text-white hover:bg-[#17436c]  bg-[#c67033] hover:text-whit transition"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white/70 backdrop-blur-md border-0 rounded-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost border-0 hover:text-red-800 absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h1 className="text-3xl font-bold text-center mb-5">Book Service!</h1>

          <form onSubmit={handleBookNow}>
            <fieldset className="fieldset space-y-3">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="input border-2 w-full bg-white/70 rounded-lg"
                placeholder="Name"
                required
              />

              <label className="font-semibold">Email</label>
              <input
                type="email"
                className="input border-2 w-full bg-white/70 rounded-lg"
                placeholder="Email"
                required
              />

              <button
                type="submit"
                className="btn btn-neutral border-0 bg-[#c67033] hover:bg-[#17436c] text-white mt-4 rounded-lg w-full"
              >
                Confirm Booking
              </button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServicesPage;
