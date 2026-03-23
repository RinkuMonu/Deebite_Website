import { motion } from "framer-motion";

export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "Fill Your Basic Details",
      description:
        "Register on our website by filling your basic details like name, phone number, address and vehicle information.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900",
    },
    {
      id: 2,
      title: "Visit Our Office for Physical KYC",
      description:
        "After submitting your details, visit our office with required documents for physical verification and KYC process.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=900",
    },
    {
      id: 3,
      title: "Get Your Delivery Partner Kit",
      description:
        "Once verification is complete, our team will provide you the delivery partner kit containing a T-shirt and delivery bag.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How to Become a Delivery Partner with us
          </h2>
          <p className="text-gray-600 mt-3">
            Join us and start earning by delivering orders.
          </p>

          <div className="w-24 h-1 bg-[#cba146] mx-auto mt-4 rounded"></div>
        </div>

        {/* Steps */}
        <div className="space-y-20">

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="grid md:grid-cols-2 gap-10 items-center"
            >

              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? "md:order-2" : ""}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className={index % 2 === 1 ? "md:order-1" : ""}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#cba146] text-white font-bold">
                    {step.id}
                  </div>
<object data="" type=""></object>
                  <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-[#cba146] hover:bg-[#b89535] text-white px-10 py-3 rounded-xl font-semibold shadow-md">
            Register as Delivery Partner
          </button>
        </div>

      </div>
    </section>
  );
}