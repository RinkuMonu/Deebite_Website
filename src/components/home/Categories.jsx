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
    <section className="py-20 px-10">
      
      {/* Heading */}
      <h2 className="flex items-center justify-center text-5xl md:text-6xl mb-10 font-bold text-red-500 leading-tight">
          Categories
        </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 text-center">

        {foods.map((food, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Image */}
            <img
              src={food.img}
              alt={food.name}
              className="w-40 h-40 object-cover mb-4 rounded-full transition hover:shadow-2xl duration-300 group-hover:scale-110"
            />

            {/* Name */}
            <p className="text-xl text-gray-700 font-medium">
              {food.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}