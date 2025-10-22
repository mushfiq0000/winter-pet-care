const Card = ({ serviceData }) => {
  const data = serviceData;

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
        {data.map(({ serviceId, image, serviceName, rating, price }) => (
          <div
            key={serviceId}
            className=" card bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <figure>
              <img
                src={image}
                alt={serviceName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-semibold text-lg">{serviceName}</h3>
              <p className="text-gray-500">⭐ {rating || "4.8"} / 5</p>
              <p className="font-medium">💰 Price: ${price || "25"}</p>
              <div className="card-actions justify-end mt-2">
                <button className="btn btn-sm bg-blue-400 text-white hover:bg-blue-500 border-none">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
