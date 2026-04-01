import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Contact */}
        <div>
       <img src="/home/deebite-logo.png" alt="Deebite Logo" className="h-14 mb-5" />

          <p className="text-sm mb-6">
            Lorem ipsum dolor sit consectetur, ame adipiscing elit, sed do
          </p>

        
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6 border-b border-gray-600 inline-block pb-2">
            Quick links
          </h3>

          <ul className="space-y-2">
            <li>
              {" "}
              <Link to="/" className="hover:text-red-400 cursor-pointer">
                Home{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about" className="hover:text-red-400 cursor-pointer">
                About{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/deliverypartner"
                className="hover:text-red-400 cursor-pointer"
              >
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6 border-b border-gray-600 inline-block pb-2">
            Perks
          </h3>

          <div className="grid grid-cols-3 gap-3">
            <img
              src="/home/chaat.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
            <img
              src="/home/kachori.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
            <img
              src="/home/chai.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
            <img
              src="/home/dosa.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
            <img
              src="/home/chhole-bhature.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
            <img
              src="/home/cc.jpg"
              className="rounded-md hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6 border-b border-gray-600 inline-block pb-2">
           Contact
          </h3>
           <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-red-500" />
              <p>
                info@deebite.com <br /> test@deebite.com
              </p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-red-500" />
              <p>
                +123 456 679 123 <br /> +123 456 789 333
              </p>
            </div>
          </div>

        
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-2  pt-6 text-center text-sm">
        © {new Date().getFullYear()} Deebite. All Rights Reserved.
      </div>
    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-gray-400 mt-5 text-sm md:text-base">

  <Link to="/privacypolicy" className="hover:text-[#f5185a] transition">
    Privacy Policy
  </Link>

  <span className="hidden md:block">|</span>

  <Link to="/refundpolicy" className="hover:text-[#f5185a] transition">
    Refund Policy
  </Link>

  <span className="hidden md:block">|</span>

  <Link to="/termsofservice" className="hover:text-[#f5185a] transition">
    Terms of Service
  </Link>

</div>
    </footer>
  );
}
