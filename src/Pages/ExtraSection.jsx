import Marquee from "react-fast-marquee";
import "animate.css";

// Winter Care Tips data
const winterTips = [
  {
    id: 1,
    title: "Keep them Warm Indoors",
    detail: "Ensure pets have a warm bed away from cold floors or drafts.",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    detail: "Use pet-safe balm or booties to prevent cracked paws.",
  },
  {
    id: 3,
    title: "Provide Proper Nutrition",
    detail: "Winter burns more calories — offer nutrient-rich food.",
  },
  {
    id: 4,
    title: "Limit Outdoor Time",
    detail: "Keep walks short during extreme cold and snow.",
  },
];

// Expert Vets data
const experts = [
  {
    id: 1,
    name: "Dr. Anika Rahman",
    specialization: "Dog & Cat Health",
    experience: "10 years",
    qualification: "DVM, Veterinary Medicine",
    photo:
      "https://i.ibb.co/Hy6xMGD/360-F-320744517-Ta-Gk-T7a-Rlqq-Wdf-GUuz-RKDABt-FEo-N5-Ci-O.jpg",
  },
  {
    id: 2,
    name: "Dr. Farhan Alam",
    specialization: "Pet Nutrition & Diet",
    experience: "8 years",
    qualification: "DVM, Animal Nutrition",
    photo: "https://i.ibb.co/cXYWx0Xq/images-1.jpg",
  },
  {
    id: 3,
    name: "Dr. Lina Chowdhury",
    specialization: "Exotic Pets & Birds",
    experience: "6 years",
    qualification: "DVM, Exotic Animal Care",
    photo:
      "https://i.ibb.co/0jpsnh7J/profile-photo-attractive-family-doc-600nw-1724693776.webp",
  },
  {
    id: 4,
    name: "Dr. Imran Hossain",
    specialization: "Surgery & Emergency Care",
    experience: "12 years",
    qualification: "DVM, Veterinary Surgery",
    photo:
      "https://i.ibb.co/q4D08zW/360-F-707893096-yj-V8-CEQAdg7fzs-PAYrwx-R8wu-FURZgb-VU.jpg",
  },
];

// 1 More Extra Section
const winterEssentials = [
  { id: 1, name: "Paws & Claws Store", detail: "Best winter gear and accessories for pets." },
  { id: 2, name: "Furry Friends Hub", detail: "Nutritious food and warm clothing for pets." },
  { id: 3, name: "Happy Tails Supplies", detail: "Heated beds and cozy blankets available." },
  { id: 4, name: "The Pet Corner", detail: "All-in-one shop for winter pet essentials." },
];


const ExtraSection = () => {
  return (
    <div>
      <section className="py-12 px-6 ">
        <h2
          className="text-3xl md:text-5xl py-5 font-bold text-center mb-8 animate__animated animate__fadeInUp"
          style={{
            animationDelay: "3s",
            animationIterationCount: 2,
          }}
        >
          ❄️ Winter Care Tips for Pets
        </h2>
        <Marquee delay={2} pauseOnHover={true}>
          <div className="grid grid-cols-4 gap-6 ml-5  text-white">
            {winterTips.map((tips) => (
              <div
                key={tips.id}
                className="p-4 bg-[#17436c] rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{tips.title}</h3>
                <p className="">{tips.detail}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
      <div className="py-10">
        <h2
          className="text-3xl text-black md:text-5xl py-5 font-bold text-center mb-8 animate__animated animate__fadeInUp"
          style={{
            animationDelay: "5s",
            animationIterationCount: 2,
          }}
        >
          🧑‍⚕️ Meet Our Expert Vets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {experts.map((details) => (
            <div
              key={details.id}
              className="bg-[#17436c] text-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105"
            >
              <img
                src={details.photo}
                alt={details.name}
                className="w-32 h-32 rounded-full border-4 border-[#c67033] object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{details.name}</h3>
              <p className="text-[#c67033] font-medium mb-1">
                {details.specialization}
              </p>
              <p className=" text-sm mb-1">{details.qualification}</p>
              <p className=" text-sm mb-2">Experience: {details.experience}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 px-5">
          <Marquee gradient={false} speed={50}>
            {experts.map((doctor) => (
              <div key={doctor.id} className="mx-10 text-lg font-semibold ">
                {doctor.name} - {doctor.specialization}
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <section className="py-12 px-6 rounded-2xl my-10">
        <h2 className="text-3xl md:text-5xl py-5 font-bold text-center mb-8 animate__animated animate__fadeInUp">
          🐾 Winter Essentials for Pets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {winterEssentials.map((item) => (
            <div
              key={item.id}
              className="bg-[#153f67] p-5 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
