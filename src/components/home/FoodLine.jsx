import React from "react";

export default function FoodLine() {

  const floatingImages = [
    {
      src: "/home/burger.png",
      alt: "burger",
      className:
        "hidden md:block absolute left-10 lg:left-20 top-40 lg:top-60 w-28 md:w-40 lg:w-60 animate-float",
    },
    {
      src: "/home/dumplings.png",
      alt: "dumplings",
      className:
        "hidden md:block absolute right-10 lg:right-32 top-0 w-40 md:w-56 lg:w-80 animate-float",
    },
    {
      src: "/home/choumin.png",
      alt: "choumin",
      className:
        "hidden lg:block absolute right-10 lg:right-14 top-24  w-24 md:w-32 lg:w-40 animate-float",
    },
    {
      src: "/home/dahibade.PNG",
      alt: "dahibade",
      className:
        "hidden md:block absolute left-0 lg:left-4 -top-4 w-40 md:w-56 lg:w-80",
    },
    {
      src: "/home/vadapao.png",
      alt: "vadapao",
      className:
        "hidden md:block absolute left-4 lg:left-10 bottom-0 w-32 md:w-44 lg:w-60 animate-float",
    },
    {
      src: "/home/sevpuri.png",
      alt: "sevpuri",
      className:
        "hidden lg:block absolute right-6 bottom-0 w-40 md:w-52 lg:w-72",
    },
  ];

  return (
    <section className="relative py-24 md:py-40 lg:py-52 my-16 md:my-20 overflow-hidden">

      {/* Yellow Circle Splash */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <svg
          viewBox="0 0 600 600"
          className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]"
        >
          <circle cx="300" cy="300" r="260" fill="#FFF9F4" />
        </svg>
      </div>

      {/* Floating Images */}
      {floatingImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`${img.className} z-10`}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 leading-tight">
          Mood Off? <br /> Street Food On!
        </h1>

        <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
          From Bustling Street Corners to Your Living Room — Enjoy Your Favorite
          Street Food Anytime.
        </p>
      </div>

    </section>
  );
}