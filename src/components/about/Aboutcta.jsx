export default function AboutctaSection() {
    return (
        <section
            className="relative h-[60vh]  overflow-hidden"
            style={{
                backgroundImage: "url('/home/banner-bgdark.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 items-center justify-center text-center h-full flex">
                <div className="max-w-7xl mx-auto px-6 text-white">

                    <h2 className="text-6xl font-extrabold mb-6">
                        The Story Behind <br /> DeeBite
                    </h2>

                    <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                        DeeBite was created to bring the real taste of street food closer to you.
                        From spicy chaats to crispy snacks, we connect you with the best local
                        vendors so you can enjoy authentic flavours anytime, anywhere.
                    </p>

                </div>
            </div>
        </section>
    );
}