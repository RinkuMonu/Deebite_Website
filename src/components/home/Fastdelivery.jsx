import { Link } from "react-router-dom";

export default function FastdeliverySection() {
    return (
        <section className="relative w-full pb-12">
            {/* Top Background Image */}
            <div
                className="h-[420px] hidden md:block w-full md:bg-cover bg-center bg-contain"
                style={{
                    backgroundImage: "url('/home/delivery-2.PNG')",
                    backgroundPosition: "bottom",
                }}
            ></div>
            {/* Overlapping Content Card */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative -mt-32 bg-[#1f2430] text-white rounded-xl overflow-hidden flex items-center justify-between p-12">
                    {/* Right Image */}
                    <div className="hidden md:block">
                         <img
                        src="/home/del-men.png"
                        alt="Delivery Partner"
                        className="absolute left-[50px] bottom-[-50px] w-[550px] h-[400px] hidden md:block"
                    />
                    </div>
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">
                            In 15 Min, <br />
                            At your Doorstep !
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Join DeeBite and help deliver hot, fresh food to customers in just
                            15 minutes. Earn on every delivery, enjoy flexible working hours,
                            and be part of a fast-growing street food delivery network in your city.
                        </p>
                       <Link
  to="/deliverypartner"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold 
  px-4 sm:px-6 md:px-8 
  py-2 sm:py-3 
  text-xs sm:text-sm md:text-base 
  rounded-md 
  inline-block text-center"
>
  Become a Delivery Partner
</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}