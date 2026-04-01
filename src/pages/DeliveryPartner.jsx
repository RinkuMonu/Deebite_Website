import { useState } from "react";
import Steps from "../components/deliverypartner/Steps";
import VendorPartnerSteps from "../components/deliverypartner/vendorsteps";

const DeliveryPartnerSection = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleMobileChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
      setError("");
    }
  };


  const handleGetOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    setError("");
    setShowOtp(true);
    alert("OTP Sent!");
  };

  const handleOtpChange = (element, index) => {
    if (!/^\d*$/.test(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();


    if (otp.join("").length !== 6) {
      setError("Please enter 6 digit OTP");
      return;
    }

    setError("");
    alert("OTP Verified!");
  };

  return (
 <>

    <section className="relative h-[50vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/partner/hand-shake.jpg"
          alt="Delivery Partner"
          className="w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Become Our <span className="text-[#cba146]"> Partner</span>
        </h1>
        </div>
    </section>
    <Steps />
      <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('/home/del-part.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Join us as our{" "}
            <span className="text-yellow-500">Delivery Partner!</span>
          </h1>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full mx-auto lg:ml-auto">
          <h2 className="text-center text-white text-xl font-semibold mb-6">
            Register as Delivery Partner
          </h2>

          <form className="space-y-4">
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
              className="w-full border-2 rounded-lg px-4 py-3 focus:outline-none hover:border-yellow-500"
            />

            {/* OTP Fields */}
            {showOtp && (
              <div className="flex justify-between gap-2 mt-3">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    className="w-10 h-12 border-2 rounded-lg text-center text-lg focus:border-yellow-500 outline-none"
                  />
                ))}
              </div>
            )}

           {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Buttons */}
            {!showOtp ? (
              <button
                onClick={handleGetOtp}
                className="w-full bg-yellow-400 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Get OTP
              </button>
            ) : (
              <button
                onClick={handleVerifyOtp}
                className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold transition"
              >
                Verify OTP
              </button>
            )}
          </form>
        </div>
      </div>
    </section>

    <VendorPartnerSteps />
 </>
  );
};

export default DeliveryPartnerSection;