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
      className="relative h-screen flex items-center justify-center text-center overflow-visible"
      style={{
        backgroundImage: `url('/home/street-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* LEFT IMAGE */}
      <img
        src="/home/dahi-puri.png"
        alt="dahi puri"
        className={`absolute left-0 top-16 w-[330px] drop-shadow-2xl transition-all duration-[1200ms] ${
          loaded
            ? "translate-x-0 opacity-100 rotate-6"
            : "-translate-x-52 opacity-0"
        }`}
      />

      {/* RIGHT IMAGE */}
      <img
        src="/home/momos.png"
        alt="momos"
        className={`absolute right-0 bottom-10 w-[330px] drop-shadow-2xl transition-all duration-[1200ms] ${
          loaded
            ? "translate-x-0 opacity-100 -rotate-6"
            : "translate-x-52 opacity-0"
        }`}
      />

      {/* FLOATING FOOD EMOJIS */}
      <div className="absolute top-20 left-1/4 text-6xl animate-bounce">🌮</div>
      <div className="absolute bottom-32 right-1/3 text-6xl animate-bounce delay-300">
        🍜
      </div>
      <div className="absolute top-32 right-1/4 text-6xl animate-bounce delay-700">
        🌭
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
          <span className="text-yellow-400">Desi Swad</span>
          <br />
          Ab Seedha
          <span className="text-yellow-400"> Aapke Darwaze </span>
          Tak!
        </h1>

        <p className="text-gray-200 mt-6 text-lg md:text-xl">
          Garma Garam Chaat, Momos, Pav Bhaji aur Street Special Snacks 🚀
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-[#F5185a] hover:bg-yellow-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-110 transition duration-300 animate-pulse">
            Order Now 🍔
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Explore Menu 🌮
          </button>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

   
    </section>
  );
}