import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setMobile(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate 10 digit mobile number
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobile)) {
      setError("Enter a valid 10 digit mobile number");
      return;
    }

    setError("");
    alert("Login successful");
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
            <Link to="/">Deebite</Link>
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
              to="/"
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
          
            <button
              onClick={() => setLoginOpen(true)}
              className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500"
            >
              <IoIosPerson size={24} />
            </button>

          
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

      {/* OFFCANVAS LOGIN */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[70vh] w-[550vh] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          loginOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      <div className="grid grid-cols-1 h-full">
  {/* LEFT SIDE FORM */}
  <div className="bg-gray-100 p-10 flex items-center relative">

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setLoginOpen(false)}
      className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
    >
      ✕
    </button>

      <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
      <p className="text-xl font-semibold mb-8">Log in to your ID</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Mobile */}
        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter your Phone number"
            className="w-full border p-3 rounded-lg bg-white"
            maxLength={10}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border p-3 rounded-lg bg-white"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-[#f5185a] hover:bg-[#f5185a]/70 text-white py-3 rounded-lg font-semibold">
          Continue
        </button>

        <p className="text-sm text-gray-600">
          By continuing you agree to our{" "}
          <span className="text-blue-600 underline">
            privacy policy
          </span>{" "}
          and{" "}
          <span className="text-blue-600 underline">
            terms of use
          </span>
        </p>

        <p className="text-center">
          <a href="#" className="text-blue-600 underline">
            Register
          </a>
        </p>

      </form>
    </div>

  </div>
</div>
      </div>
    </>
  );
};

export default Header;
