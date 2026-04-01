import { motion } from "framer-motion";

export default function VendorPartnerSteps() {
  const steps = [
    {
      id: 1,
      title: "Fill the Form on the Website",
      description:
        "Start by filling out the vendor registration form on our website with your basic business details.",
    },
    {
      id: 2,
      title: "Register on the Deebite Panel",
      description:
        "Create your account on the Deebite vendor panel and complete your profile to get started.",
    },
    {
      id: 3,
      title: "Get Your Hygiene Kit & Banner",
      description:
        "Our team will provide you with a hygiene kit and promotional banner to help you start selling smoothly.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Become a Vendor Partner
          </h2>
          <p className="text-gray-600 mt-3">
            Start your journey with us in just a few simple steps
          </p>
          <div className="w-24 h-1 bg-[#cba146] mx-auto mt-4 rounded"></div>
        </div>
                                
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Step Number */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#cba146] text-white text-xl font-bold mb-4">
                {step.id}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}