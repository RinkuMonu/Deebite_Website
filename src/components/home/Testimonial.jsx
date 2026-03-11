"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Food Lover",
    text: "DeeBite delivers my favorite street food in just minutes. The taste and speed are amazing!",
    img: "/home/man.jpg"
  },
  {
    name: "Priya Mehta",
    role: "Regular Customer",
    text: "I love the quick 15 minute delivery. It feels like the food stall is right outside my home.",
    img: "/home/woman.jpg"
  },
  {
    name: "Amit Verma",
    role: "Student",
    text: "Perfect for late night cravings. Fast delivery and delicious snacks every time!",
    img: "/home/man.jpg"
  },
  {
    name: "Neha Kapoor",
    role: "Office Professional",
    text: "DeeBite has completely changed how I order street food. Super fast and reliable.",
    img: "/home/woman.jpg"
  },
  {
    name: "Priya Mehta",
    role: "Regular Customer",
    text: "I love the quick 15 minute delivery. It feels like the food stall is right outside my home.",
    img: "/home/woman.jpg"
  },
   {
    name: "Amit Verma",
    role: "Student",
    text: "Perfect for late night cravings. Fast delivery and delicious snacks every time!",
    img: "/home/man.jpg"
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#fff9f4]">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our <span className="text-[#f5185a]">Customers Say</span>
        </h2>

        <p className="text-gray-500 mb-14 max-w-xl mx-auto">
          Thousands of food lovers trust DeeBite for their daily street food cravings.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>

              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 p-10 rounded-2xl border
                  ${isActive
                      ? "scale-110 bg-white shadow-2xl border-[#f5185a]"
                      : "scale-90 opacity-60 bg-white border-transparent"
                    }`}
                >

                  {/* Quote Icon */}
                  <div className="text-[#f5185a] text-5xl mb-4">
                    ❝
                  </div>

                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    {t.text}
                  </p>

                  {/* Rating */}
                  <div className="text-yellow-400 mb-6 text-lg">
                    ★★★★★
                  </div>

                  {/* User */}
                  <div className="flex items-center justify-center gap-4">

                    <img
                      src={t.img}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#f5185a]"
                    />

                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {t.role}
                      </p>
                    </div>

                  </div>

                </div>
              )}

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  )
}