export default function AboutctaSection() {
  return (
    <section
      className="relative min-h-[50vh] md:h-[60vh] overflow-hidden"
      style={{
        backgroundImage: "url('/about/aboutbgimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full mt-10 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            The Story Behind <br className="hidden sm:block" /> DeeBite
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            DeeBite was created to bring the real taste of street food closer to you.
            From spicy chaats to crispy snacks, we connect you with the best local
            vendors so you can enjoy authentic flavours anytime, anywhere.
          </p>

        </div>
      </div>
    </section>
  );
}