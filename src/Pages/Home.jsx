import { use } from "react";
import Banner from "../Components/Banner";
import Skeleton from "../loading/skeleton";
import Card from "./Card";
import ExtraSection from "./ExtraSection";
import "animate.css";
import { ContextData } from "../Context/ContextData";

const Home = () => {
  const {loading} = use(ContextData)

  if (loading) {
    return <Skeleton></Skeleton>
  }


  return (
    <div className="bg-gray-100"> 
        <div>
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
