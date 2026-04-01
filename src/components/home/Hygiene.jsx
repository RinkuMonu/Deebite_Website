import React from "react";
import {
  FaHandsWash,
  FaShieldAlt,
  FaHeadSideMask,
} from "react-icons/fa";
import {  GiChefToque } from "react-icons/gi";
import { MdCleanHands } from "react-icons/md";

const HygieneSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/home/streetvendor.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating Icons */}
      <FaHandsWash className="absolute text-white/20 text-6xl top-10 left-10 animate-bounce" />
      <FaHandsWash className="absolute text-white/20 text-5xl bottom-16 left-20 animate-pulse" />
      <GiChefToque className="absolute text-white/20 text-6xl top-16 right-20 animate-bounce" />
      <FaHeadSideMask className="absolute text-white/20 text-5xl bottom-20 right-10 animate-pulse" />
      <MdCleanHands className="absolute text-white/20 text-6xl top-1/2 left-1/3 animate-bounce" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 h-[50vh] text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Safety, Our Priority
          </h2>

          <p className="text-gray-200 mb-8 text-lg">
            We ensure strict hygiene practices at every step — from preparation
            to delivery. Enjoy your favorite street food with complete peace of
            mind.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-white">
              <FaHandsWash size={40} className="mb-3 text-yellow-400" />
              <p>Gloves & Sanitized Handling</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <FaHeadSideMask size={40} className="mb-3 text-yellow-400" />
              <p>Mask & Hair Cover</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <FaShieldAlt size={40} className="mb-3 text-yellow-400" />
              <p>Safe & Sealed Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;