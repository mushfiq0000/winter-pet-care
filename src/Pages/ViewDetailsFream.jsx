import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { ContextData } from "../Context/ContextData";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ViewDetailsFream = () => {
  const { data, loading } = use(ContextData);
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!loading && data?.length) {
      const showDetails = data.find((singleData) => singleData.serviceId == id);
      setDetails(showDetails || null);
    }
  }, [data, id, loading]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          <span className="loading loading-ring loading-xl"></span>
        </h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>
          <IoArrowBack /> Go Back
        </button>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          <span className="loading loading-ring loading-xl"></span>
        </h2>
        <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>
          <IoArrowBack /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      
      <main>
        <div className="hero bg-base-200 min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={details.image}
              className="w-2xl rounded-lg shadow-2xl md:mr-15 mb-6 lg:mb-0"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {details.serviceName}
              </h1>
              <p className="py-6 text-2xl">{details.description}</p>

              <div className="md:flex items-center font-semibold justify-between pr-14 mb-4">
                <p>Name: {details.providerName}</p>
                <p>Email: {details.providerEmail}</p>
              </div>

              <div className="flex flex-wrap justify-between pr-13 py-6 items-center">
                <p className="badge p-4 rounded-md">
                  Slots: {details.slotsAvailable}
                </p>
                <p className="text-blue-700">${details.price}</p>
                <p className="text-yellow-600">⭐ {details.rating}</p>
                <p className="badge p-4 rounded-md">
                  Category: {details.category}
                </p>
              </div>

              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                <IoArrowBack /> Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ViewDetailsFream;
