import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4"
      style={{
        backgroundImage: `url('/home/street-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* LEFT IMAGE */}
      <img
        src="/home/dahi-puri.png"
        alt="dahi puri"
        className={`hidden md:block absolute 
        left-[-40px] top-20
        w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px]
        drop-shadow-2xl transition-all duration-[1200ms]
        ${loaded ? "translate-x-0 opacity-100 rotate-6" : "-translate-x-40 opacity-0"}`}
      />

      {/* RIGHT IMAGE */}
      <img
        src="/home/momos.png"
        alt="momos"
        className={`hidden md:block absolute 
        right-[-40px] bottom-10
        w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px]
        drop-shadow-2xl transition-all duration-[1200ms]
        ${loaded ? "translate-x-0 opacity-100 -rotate-6" : "translate-x-40 opacity-0"}`}
      />

      {/* FLOATING EMOJIS */}
      <div className="absolute top-20 left-1/4 text-3xl md:text-5xl">
        🌮
      </div>

      <div className="absolute bottom-32 right-1/3 text-3xl md:text-5xl ">
        🍜
      </div>

      <div className="absolute top-32 right-1/4 text-3xl md:text-5xl ">
        🌭
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          <span className="text-yellow-400">Desi Swad</span>
          <br />
          Ab Seedha
          <span className="text-yellow-400"> Aapke Darwaze </span>
          Tak!
        </h1>

        <p className="text-gray-200 mt-4 md:mt-6 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
          Garma Garam Chaat, Momos, Pav Bhaji aur Street Special Snacks
        </p>

        {/* BUTTONS */}
        <div className="mt-6 md:mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-[#F5185a] hover:bg-yellow-300 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
            Order Now 🍔
          </button>

          <button className="border border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Explore Menu 🌮
          </button>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 w-full h-32 md:h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}