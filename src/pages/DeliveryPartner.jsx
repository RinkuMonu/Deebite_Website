import { useState } from "react";

const DeliveryPartnerSection = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 10) {
        setMobile(value);
        setError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    setError("");
    alert("OTP Sent!");
  };

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Join us as our{" "}
            <span className="text-yellow-500 font-bold">
              Delivery Partner!
            </span>
          </h1>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full mx-auto lg:ml-auto">
          <h2 className="text-center text-lg sm:text-xl font-semibold mb-6">
            Register as Delivery Partner
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-2 rounded-lg px-4 py-3 focus:outline-none hover:border-yellow-500"
            />

            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              placeholder="Enter Your Mobile Number"
              className="w-full border-2 hover:border-yellow-500 rounded-lg px-4 py-3 focus:outline-none"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Get OTP
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default DeliveryPartnerSection;