import { Link } from "react-router-dom";
import { MdOutlineRateReview } from "react-icons/md";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");


  const [ratingOpen, setRatingOpen] = useState(false);
const [rating, setRating] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 10) {
        setMobile(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mobileRegex = /^[6-9]\d{9}$/;

    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (!mobileRegex.test(mobile)) {
      setError("Enter a valid 10 digit mobile number");
      return;
    }

    if (message.trim() === "") {
      setError("Please write your feedback");
      return;
    }

   setError("");

setName("");
setMobile("");
setMessage("");
setLoginOpen(false);

setRatingOpen(true); // open star rating popup
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black text-white shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 md:bg-transparent bg-black flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
           <img src="/home/deebite-logo.png" alt="Deebite Logo" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>

            <Link
              to="https://play.google.com/store/apps/details?id=com.utility.finunique" target="blank"
              className="flex items-center border border-gray-200 hover:border-yellow-400 px-5 py-2 rounded-lg hover:text-yellow-400 transition"
            >
              Get the App
              <HiArrowTrendingUp className="ml-2" size={22} />
            </Link>

            <Link
              to="/deliverypartner"
              className="hover:text-yellow-400 transition"
            >
              Become a Partner
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* Feedback Button */}
            <button
              onClick={() => setLoginOpen(true)}
              className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500"
            >
              <MdOutlineRateReview size={24} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white px-6 pb-6 flex flex-col space-y-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link
              to="/"
              className="flex items-center border border-gray-200 px-4 py-2 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get the App
              <HiArrowTrendingUp className="ml-2" size={20} />
            </Link>

            <Link to="/deliverypartner" onClick={() => setMenuOpen(false)}>
              Become a Partner
            </Link>
          </div>
        )}
      </header>

      {/* BACKDROP */}
      {loginOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setLoginOpen(false)}
        ></div>
      )}

      {/* OFFCANVAS FEEDBACK FORM */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[450px] w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          loginOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="grid grid-cols-1 h-full">

          {/* FORM AREA */}
          <div className="bg-gray-100 p-10 flex items-center relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <div className="w-full max-w-md mx-auto">

              <h2 className="text-3xl font-bold mb-2">
                Customer Feedback
              </h2>
              <p className="text-xl font-semibold mb-8">
                Share your experience with us
              </p>

           <form className="space-y-6" onSubmit={handleSubmit}>

  {/* Name */}
  <div>
    <label className="block mb-2 font-medium">
      Your Name
    </label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      className="w-full border p-3 rounded-lg bg-white"
    />
  </div>

  {/* Role / Occupation */}
  {/* <div>
    <label className="block mb-2 font-medium">
      What do you do? (Role / Occupation)
    </label>
    <input
      type="text"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="Student / Food Blogger / Business / etc."
      className="w-full border p-3 rounded-lg bg-white"
    />
  </div> */}

  {/* Mobile */}
  <div>
    <label className="block mb-2 font-medium">
      Mobile Number
    </label>
    <input
      type="text"
      value={mobile}
      onChange={handleMobileChange}
      placeholder="Enter your phone number"
      className="w-full border p-3 rounded-lg bg-white"
      maxLength={10}
    />
  </div>

  {/* Message */}
  <div>
    <label className="block mb-2 font-medium">
      Your Review / Feedback
    </label>
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write your experience here..."
      rows="4"
      className="w-full border p-3 rounded-lg bg-white"
    ></textarea>
  </div>

  {error && (
    <p className="text-red-500 text-sm">{error}</p>
  )}

  {/* Submit */}
  <button className="w-full bg-[#f5185a] hover:bg-[#f5185a]/80 text-white py-3 rounded-lg font-semibold">
    Submit Feedback
  </button>

</form>

            </div>
          </div>
        </div>
      </div>


      {ratingOpen && (
  <>
    <div
      className="fixed inset-0 bg-black/40 z-50"
      onClick={() => setRatingOpen(false)}
    ></div>

    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold mb-4">
          Rate Your Experience
        </h2>

        <p className="text-gray-600 mb-6">
          How was your experience with Deebite?
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={34}
              onClick={() => setRating(star)}
              className={`cursor-pointer transition ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            alert(`Thank you for rating us ${rating} stars!`);
            setRatingOpen(false);
            setRating(0);
          }}
          className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-[#f5185a]/80"
        >
          Submit Rating
        </button>
      </div>
    </div>
  </>
)}
    </>
  );
};

export default Header;