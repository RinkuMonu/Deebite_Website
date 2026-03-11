export default function PrivacyPolicy() {

  const policySections = [
    {
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, phone number, email address, and delivery location when you place an order, sign up, or contact us through our website.",
    },
    {
      title: "How We Use Your Information",
      content:
        "The information we collect is used to process your orders, improve our services, communicate with you regarding your orders, and provide customer support.",
    },
    {
      title: "Data Protection",
      content:
        "We implement security measures to protect your personal information from unauthorized access, misuse, or disclosure.",
    },
    {
      title: "Third-Party Services",
      content:
        "We may use trusted third-party services for payments, analytics, and delivery services. These services have their own privacy policies.",
    },
    {
      title: "Changes to This Policy",
      content:
        "DeeBite may update this Privacy Policy from time to time. We encourage users to review this page periodically for any changes.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Banner Section */}
      <section
        className="relative h-[64vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/about/policy.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Your privacy matters to us. Learn how DeeBite collects,
            uses and protects your personal information.
          </p>

          <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
        </div>
      </section>

      {/* Policy Content */}
      <div className="py-16 px-6">

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow">

          <p className="text-gray-600 mb-8">
            Last Updated: March 2026
          </p>

          <p className="text-gray-700 mb-10 leading-relaxed">
            At <span className="font-semibold text-[#f5185a]">DeeBite</span>, we respect your
            privacy and are committed to protecting your personal information.
            This policy explains how we collect, use, and safeguard your data
            when you use our website and services.
          </p>

          {/* Map Policy Sections */}
          {policySections.map((section, index) => (
            <div key={index} className="mb-8">

              <h2 className="text-xl font-semibold text-gray-600 mb-3">
                {index + 1}. {section.title}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>

            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-3">
              Contact Us
            </h2>

            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>

            <p className="mt-2 font-medium text-yellow-500">
              Email: support@deebite.com
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}