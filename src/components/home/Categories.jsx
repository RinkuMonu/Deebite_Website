import React from "react";

export default function FoodCategorySection() {
  const foods = [
    { name: "Kachori", img: "/home/kachori.jpg" },
    { name: "Chaat", img: "/home/chaat.jpg" },
    { name: "Poha", img: "/home/poha.jpg" },
    { name: "Paratha", img: "/home/parantha.jpg" },
    { name: "Tea", img: "/home/chai.jpg" },
    { name: "Khichdi", img: "/home/khichdi.jpg" },
    { name: "Chole Bhature", img: "/home/chhole-bhature.jpg" },
    { name: "Samosa", img: "/home/samosa.jpg" },
    { name: "Coffee", img: "/home/cc.jpg" },
    { name: "Pakoda", img: "/home/pakoda.jpg" },
  ];

  return (
    <section id="categories" className="py-16 md:py-20 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 font-bold text-red-500 leading-tight">
        Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 text-center">

        {foods.map((food, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Image */}
            <img
              src={food.img}
              alt={food.name}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover mb-3 md:mb-4 rounded-full transition duration-300 group-hover:scale-110 group-hover:shadow-2xl"
            />

            {/* Name */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium">
              {food.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}