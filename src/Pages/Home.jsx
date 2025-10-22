import React from "react";
import Banner from "../Components/Banner";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import ExtraSection from "./ExtraSection";

const Home = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("/petservice.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div>
      <div>
        <Banner serviceData={serviceData}></Banner>
      </div>
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          🐾 Popular Winter Care Services
        </h2>
        <Card serviceData={serviceData}></Card>
      </section>
      <section>
        <ExtraSection/>
      </section>
    </div>
  );
};

export default Home;
