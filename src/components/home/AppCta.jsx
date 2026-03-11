import { Link } from "react-router-dom";

export default function AppCtaSection() {
  return (
    <section className="max-w-6xl mx-auto rounded-2xl h-auto py-14 md:py-16 my-12 md:my-16 bg-yellow-100">

      <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
      <div className="flex items-center justify-center" data-aos="fade-right">
  <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug md:leading-tight mb-4 md:mb-6">
            Craving Street Food? <br className="hidden md:block" /> We Deliver It Fresh!
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Discover your favorite street food from the best local vendors and
            get it delivered hot and fresh in just 15 minutes right to your doorstep.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="https://play.google.com/store/apps/details?id=com.utility.finunique"
              target="_blank"
              download
              className="flex items-center gap-3 border-2 border-[#F5185A] text-[#F5185A] px-6 md:px-7 py-3 rounded-md font-medium hover:bg-[#F5185A] hover:text-[#fff9f4] transition"
            >
              <img
                src="/home/playstore.png"
                alt="download"
                className="w-5 h-5"
              />
              Get the App
            </Link>
          </div>

        </div>
      </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src="/home/phone.PNG"
            alt="phone"
            className="w-38 sm:w-46 md:w-52 border-4 border-black animate-float rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}