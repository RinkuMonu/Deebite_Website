export default function AppCtaSection() {
    return (
        <section className="max-w-6xl h-[60vh] mx-auto rounded-2xl py-24 my-16 bg-yellow-100 relative">

            <div className="px-10 grid md:grid-cols-2 items-center gap-10">

                {/* LEFT CONTENT */}
                <div>
           <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
  Craving Street Food? <br /> We Deliver It Fresh!
</h2>

<p className="text-gray-600 mb-8 leading-relaxed">
  Discover your favorite street food from the best local vendors and get it delivered hot and fresh in just 15 minutes right to your doorstep.
</p>

                    <div className="flex items-center gap-6 mt-8">
                        <button className="flex items-center gap-3 border-2 border-[#F5185A] text-[#F5185A] px-7 py-3 rounded-md font-medium hover:bg-[#F5185A] hover:text-[#fff9f4]">

                            <img
                                src="/home/playstore.png"
                                alt="download"
                                className="w-5 h-5"
                            />

                            Get the App

                        </button>
                    </div>
                </div>

                {/* EMPTY RIGHT SIDE */}
                <div></div>

            </div>

            {/* PHONE IMAGE */}
            <img
                src="/home/phone.PNG"
                alt="phone"
                className="absolute right-20 -top-16 w-72 animate-float border-4 border-black rounded-3xl shadow-2xl"
            />

        </section>
    );
}