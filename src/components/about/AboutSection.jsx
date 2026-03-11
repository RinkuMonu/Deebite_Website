import { FaUtensils } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

import { BsShopWindow } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function AboutUsSection() {

    const stats = [
    {
      number: "300+",
      label: "Vendors",
      icon: <BsShopWindow />,
    },
    {
      number: "400+",
      label: "Dishes",
      icon: <IoFastFoodOutline />,
    },
    {
      number: "1000+",
      label: "orders delivered",
      icon: <MdOutlineDeliveryDining />,
    },
  ];


  return (
    <section className="py-24 bg-gray-100">
         <div className="px-auto mx-auto mb-10 w-full max-w-4xl px-6 z-20">
        <div className="bg-white rounded-3xl shadow-xl py-10 px-10 flex flex-col md:flex-row justify-between items-center gap-8">

          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-6 relative">

              <div>
                <h3 className="text-3xl font-bold text-gray-700">
                  {item.number}
                </h3>
                <p className="text-gray-500">{item.label}</p>
              </div>

              <div className="text-yellow-500 text-5xl">
                {item.icon}
              </div>

            
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute -right-10 h-10 w-px bg-gray-200"></div>
              )}
            </div>
          ))}

        </div>
      </div>
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