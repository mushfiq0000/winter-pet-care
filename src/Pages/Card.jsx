import { use } from "react";
import { ContextData } from "../Context/ContextData";
import { Link } from "react-router";

const Card = () => {
  const { data, loading } = use(ContextData);

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          <span className="loading loading-ring loading-xl"></span>
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {data.map(({ serviceId, image, serviceName, rating, price }) => (
          <div
            key={serviceId}
            className=" card bg-white shadow-lg rounded-xl  overflow-hidden hover:scale-105 transition-transform"
          >
            <figure>
              <img src={image} alt="" className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body text-black">
              <h3 className="font-semibold text-lg">{serviceName}</h3>
              <p className="text-gray-500">⭐ {rating || "4.8"} / 5</p>
              <p className="font-medium">💰 Price: ${price || "25"}</p>
              <div className="card-actions justify-end mt-2">
                <Link
                  to={`/view-details/${serviceId}`}
                  className="btn btn-sm  text-white hover:bg-[#17436c]  bg-[#c67033] hover:text-whit border-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
