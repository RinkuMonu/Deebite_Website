export default function AboutBannerSection() {
  return (
    <section
      className="relative h-[60vh]  overflow-hidden"
      style={{
        backgroundImage: "url('/about/aboutbg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-8 left-8 text-white max-w-md">
        <h2 className="text-4xl font-bold mb-2">
          About Us
        </h2>
        <p className="text-sm text-gray-200">
          Discover the authentic flavours of your favourite street food
          delivered fresh to your doorstep.
        </p>
      </div>
    </section>
  );
}