import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { useState, useEffect } from "react";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Deebite</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            Category
          </Link>

          <Link
            to="/"
            className="flex items-center border border-gray-200 hover:border-yellow-400 px-5 py-2 rounded-lg hover:text-yellow-400 transition"
          >
            Get the App
            <HiArrowTrendingUp className="ml-2" size={22} />
          </Link>

            <Link to="/about" className="hover:text-yellow-400 transition">
            Become a Partner
          </Link>
        </nav>

        {/* User Button */}
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
            <IoIosPerson size={24} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;