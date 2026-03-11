export default function AboutBannerSection() {
  return (
    <section
      className="relative min-h-[45vh] sm:min-h-[50vh] md:h-[60vh] overflow-hidden"
      style={{
        backgroundImage: "url('/home/foodstall.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Text */}
      <div className="absolute bottom-6 left-4 right-4 sm:left-10 md:left-20 lg:left-28 text-white max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          About Us
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          Discover the authentic flavours of your favourite street food
          delivered fresh to your doorstep.
        </p>
      </div>
    </section>
  );
}