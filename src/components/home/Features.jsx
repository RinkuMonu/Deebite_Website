import { LiaCertificateSolid } from "react-icons/lia";
import { IoTimerSharp } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { PiCertificateDuotone } from "react-icons/pi";

export default function FeaturesSection() {

  const features = [
    {
      title: "100% Swiss Quality",
      icon: <LuBadgeCheck />,
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "30-min Delivery Guarantee",
      icon: <IoTimerSharp />,
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "Hygiene Certified",
      icon: <LiaCertificateSolid />,
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      title: "Food Law Certified",
      icon: <PiCertificateDuotone />,
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-10">

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-14">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Kyun Hai Humara <span className="text-[#F5185a]">Street Swad</span> Sabse Alag?
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          Fresh ingredients, lightning fast delivery aur hygiene ka full dhyaan —
          bas isi wajah se har bite ban jaati hai ek perfect street food experience.
        </p>

      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 sm:p-8 text-center hover:shadow-xl transition duration-300 group rounded-xl"
          >

            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center rounded-full bg-[#fff9f4] mb-5">
              <div className="text-[#F5185a] text-4xl sm:text-5xl">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Decorative line */}
            <div className="mt-5 text-[#F5185a] font-medium flex items-center justify-center gap-2">
              <span>♦</span>
              <span className="w-10 h-[2px] bg-[#F5185a]"></span>
              <span>♦</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}