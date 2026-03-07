import { FaUtensils } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

export default function AboutUsSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-6">

          <img
            src="/home/dosa.jpg"
            className="rounded-lg object-cover w-full h-60"
          />

          <img
            src="/home/kachori.jpg"
            className="rounded-lg object-cover w-full h-60"
          />

          <img
            src="/home/pav-bhaji.jpg"
            className="rounded-lg object-cover w-full h-60"
          />

          <img
            src="/home/chaat.jpg"
            className="rounded-lg object-cover w-full h-60"
          />

          {/* Red Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5185a] text-white px-8 py-4 shadow-lg">
            Best Street Food in Town
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

         <span className="text-[#f5185a] font-bold">About DeeBite</span>

<h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
  Bringing Street Food Closer To You
</h2>

<p className="text-gray-600 mb-8 leading-relaxed">
  DeeBite connects food lovers with the best local street food vendors in your city.
  From spicy chaats to crispy snacks, we bring authentic flavours right to your
  doorstep with fast delivery and an easy ordering experience.
</p>

          {/* Feature 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-md text-[#f5185a]">
              <FaUtensils size={20} />
            </div>

            <div>
            <h4 className="font-semibold text-lg">Authentic Street Flavours</h4>
<p className="text-gray-500 text-sm">
  Discover the real taste of local street food prepared by trusted vendors using
  fresh ingredients and traditional recipes.
</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-md text-[#f5185a]">
              <MdEventAvailable size={20} />
            </div>

            <div>
             <h4 className="font-semibold text-lg">Quick & Easy Ordering</h4>
<p className="text-gray-500 text-sm">
  Browse nearby vendors, explore trending snacks, and place your order instantly
  through our seamless platform.
</p>
            </div>
          </div>

          <button className="bg-[#f5185a] text-white px-8 py-3 rounded-md hover:bg-red-600">
            About Us
          </button>

        </div>

      </div>
    </section>
  );
}