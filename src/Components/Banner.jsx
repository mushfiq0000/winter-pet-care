import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  

  

  const slides = [
    {
      id: 1,
      title: "Keep Your Pets Warm This Winter",
      subtitle: "Discover cozy outfits for your furry friends!",
      image: "https://i.ibb.co/tp9XrsBY/Keeping-your-pets-safe-this-winter.jpg",
    },
    {
      id: 2,
      title: "Snuggle Time for Cats",
      subtitle: "Soft, fluffy blankets for your lovely cats.",
      image:
        "https://i.ibb.co/BJgR93R/202503bec-202306cat-cuddles-1024x615.jpg",
    },
    {
      id: 3,
      title: "Winter Walks Made Stylish",
      subtitle: "Find trendy jackets for outdoor adventures.",
      image:
        "https://i.ibb.co/tPCVpr3W/Winter-Dog-Walk-Header-Image-Social-Featured-1024x538.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    pauseOnHover: false,
  };


  

  return (
    <div className=" md:w-full md:h-160 rounded-2xl overflow-hidden shadow-lg relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative w-full h-160 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-opacity-40"></div>

              <div className="relative text-center text-white px-4 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <Link
                  to="/services"
                  className="btn bg-transparent text-white border-1  hover:bg-blue-300 hover:text-white transition-all duration-300"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
