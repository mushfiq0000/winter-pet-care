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

const ExtraSection = () => {
  return (
    <div>
      {/* tips section */}
      <section className="py-12 px-6 bg-white">
        <h2
          className="text-3xl md:text-5xl py-5 font-bold text-center mb-8 animate__animated animate__bounce"
          style={{
            animationDelay: "3s",
            animationIterationCount: 2,
          }}
        >
          ❄️ Winter Care Tips for Pets
        </h2>
        <Marquee delay={2} pauseOnHover={true}>
          <div className="grid grid-cols-4 gap-6 ml-5">
            {winterTips.map((tips) => (
              <div
                key={tips.id}
                className="p-4 bg-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{tips.title}</h3>
                <p className="text-gray-700">{tips.detail}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Expert Vets section */}
      <div className="py-10 bg-blue-100">
        <h2
          className="text-3xl md:text-5xl py-5 font-bold text-center mb-8 animate__animated animate__rubberBand"
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
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={details.photo}
                alt={details.name}
                className="w-32 h-32 rounded-full border-4 border-blue-200 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{details.name}</h3>
              <p className="text-blue-400 font-medium mb-1">
                {details.specialization}
              </p>
              <p className="text-gray-500 text-sm mb-1">{details.qualification}</p>
              <p className="text-gray-400 text-sm mb-2">
                Experience: {details.experience}
              </p>
            </div>
          ))}
        </div>

        {/* doctor naem */}
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
    </div>
  );
};

export default ExtraSection;
