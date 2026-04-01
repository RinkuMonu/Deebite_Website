import { motion } from "framer-motion";

export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "Fill Your Basic Details",
      description:
        "Register on our website by filling your basic details like name, phone number, address and vehicle information.",
    },
    {
      id: 2,
      title: "Visit Our Office for Physical KYC",
      description:
        "After submitting your details, visit our office with required documents for physical verification and KYC process.",
    },
    {
      id: 3,
      title: "Get Your Delivery Partner Kit",
      description:
        "Once verification is complete, our team will provide you the delivery partner kit containing a T-shirt and delivery bag.",
    },
  ];



    

  return (
    <>
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How to Become a Delivery Partner
          </h2>
          <p className="text-gray-600 mt-3">
            Simple steps to start earning with us
          </p>
          <div className="w-24 h-1 bg-[#cba146] mx-auto mt-4 rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#cba146]">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="mb-12 ml-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Step Number Circle */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-[#cba146] text-white rounded-full font-bold">
                {step.id}
              </span>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>



    </>
  );
}