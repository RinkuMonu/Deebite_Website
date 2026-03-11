import { useState, useEffect } from "react";

export default function FoodBannerSection() {
  const slides = [
    {
      tag: "Best In Streets",
      title: <>Chatpati <span className="text-[#F5185A] underline">Dahi Puri</span> with khatti mithhi Chutneys!</>,
      desc: "Fresh crispy puris filled with spicy potatoes, tangy chutneys and creamy curd.",
      img: "/home/dahi-puri.png",
      discount: "50% OFF"
    },
    {
      tag: "Street Special",
      title: <>Garam Garam <span className="text-[#F5185A] underline">Vada Pav</span> Mumbai Style!</>,
      desc: "Soft pav with crispy vada, spicy chutney and fried green chilli.",
      img: "/home/vadapao.png",
      discount: "40% OFF"
    },
    {
      tag: "Evening Snacks",
      title: <>Hot & Crispy <span className="text-[#F5185A] underline">Momos</span> with Spicy Dip!</>,
      desc: "Steamed and fried momos served with our special red chilli sauce.",
      img: "/home/momos.png",
      discount: "30% OFF"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-10 md:py-14 min-h-[550px] relative overflow-hidden flex items-center"
      style={{
        backgroundImage: "url('/home/banner-bg-img.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          >
            {/* LEFT CONTENT */}
            <div className="order-1 text-center md:text-left">

              <p className="text-[#F5185A] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                {slide.tag}
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug md:leading-relaxed">
                {slide.title}
              </h1>

              <p className="text-gray-500 mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-sm md:text-base">
                {slide.desc}
              </p>

              <div className="flex justify-center md:justify-start mt-6 md:mt-8">
                <button className="bg-[#F5185A] text-white px-8 md:px-12 py-3 rounded-md font-medium hover:bg-red-600 transition">
                  Order Now
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center order-2">
              <img
                src={slide.img}
                alt="food"
                className="w-[240px] sm:w-[320px] md:w-[420px] lg:w-[520px] drop-shadow-xl"
              />

              <div className="absolute bottom-2 sm:bottom-6 md:bottom-10 right-10 sm:right-20 md:right-32 bg-[#F5185A] text-white px-6 md:px-10 py-2 rounded-lg font-bold text-sm md:text-lg rotate-[-8deg] shadow-lg">
                {slide.discount}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer ${
              current === index ? "bg-[#F5185A]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}