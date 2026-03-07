import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/home/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black"></div>
      {/* <img
        src="/home/noodeles.png"
        alt="logo"
        className="absolute top-44 right-10 w-72 h-52"
      /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4 ">DEEBITE</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Discover the authentic taste of street food delivered fresh
            from your favorite local vendors right to your doorstep.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 ">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Categories</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 ">Popular Categories</h4>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-yellow-400 cursor-pointer">Chaat</li>
            <li className="hover:text-yellow-400 cursor-pointer">Snacks</li>
            <li className="hover:text-yellow-400 cursor-pointer">Desserts</li>
            <li className="hover:text-yellow-400 cursor-pointer">Beverages</li>
          </ul>
        </div>

        {/* Column 4 */}
       {/* Column 4 */}
<div>
  <h4 className="text-lg font-semibold mb-4">Download App</h4>
  <p className="text-gray-200 text-sm mb-4">
    Get our app for a better food ordering experience.
  </p>

  <div className="flex gap-4">

    {/* Google Play */}
    <button className="flex items-center bg-white text-black px-6 py-1 rounded-lg hover:bg-gray-200 transition">
      <FaGooglePlay size={22} />
      <span className="text-sm font-medium">Google Play</span>
    </button>

    {/* App Store */}
    <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
      <FaApple size={22} />
      <span className="text-sm font-medium">App Store</span>
    </button>

  </div>
</div>
      </div>

      {/* Bottom Bar */}
    <div className="relative border-t border-white/20 text-center py-4 text-sm text-gray-400">
  © {new Date().getFullYear()} DeeBite. All Rights Reserved.
</div>
    </footer>
  );
}