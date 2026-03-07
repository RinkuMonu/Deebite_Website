import React from "react";

export default function FoodLine() {

  const floatingImages = [
    { src: "/home/burger.png", alt: "burger", className: "absolute left-20 top-60 w-60" },
    { src: "/home/dumplings.png", alt: "dumplings", className: "absolute right-32 top-0 w-80" },
    { src: "/home/choumin.png", alt: "choumin", className: "absolute right-14 top-30 w-40" },
    { src: "/home/dahibade.PNG", alt: "dahibade", className: "absolute left-4 -top-4 w-80" },
     { src: "/home/vadapao.png", alt: "vadapao", className: "absolute left-10 -bottom-4 w-60" },
      { src: "/home/sevpuri.png", alt: "vadapao", className: "absolute right-6 -top-19 w-50" },
  ];

  return (
    <section className="relative py-52 md:py-58 my-20 overflow-hidden">

      {/* Yellow Circle Splash */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <svg viewBox="0 0 600 600" className="w-[700px] h-[700px]">
          <circle cx="300" cy="300" r="260" fill="#FFF9F4" />
        </svg>
      </div>

      {/* Floating Images */}
      {floatingImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={img.className + " z-10"}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-red-500 leading-tight">
          Mood Off? <br /> Street Food On!
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
         From Bustling Street Corners to Your Living Room — Enjoy Your Favorite Street Food Anytime.
        </p>
      </div>

    </section>
  );
}