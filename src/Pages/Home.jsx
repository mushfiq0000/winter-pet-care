import "animate.css";
import { use } from "react";
import Banner from "../Components/Banner";
import { ContextData } from "../Context/ContextData";
import Loading from "../loading/Loading";
import Card from "./Card";
import ExtraSection from "./ExtraSection";
import "animate.css";

const Home = () => {
  const { loading } = use(ContextData);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 ">
      <h1 className="text-5xl py-10 font-bold flex item-center justify-center">
        <p className="animate__animated animate__bounce"> 👋 </p> Welcome to WarmPaws Pet Care{" "}
      </h1>
      <div className="flex justify-center px-5 md:px-50 py-9">
        <Banner></Banner>
      </div>
      <section className="py-12 px-6">
        <h2
          className="text-3xl md:text-5xl py-3 font-bold text-center mb-8 animate__animated animate__zoomInUp"
          style={{
            animationDelay: "1s",
          }}
        >
          🐾 Popular Winter Care Services
        </h2>
        <Card></Card>
      </section>
      <section>
        <ExtraSection />
      </section>
    </div>
  );
};

export default Home;
