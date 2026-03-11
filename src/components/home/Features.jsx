import { LiaCertificateSolid } from "react-icons/lia";
import { IoTimerSharp } from "react-icons/io5";




export default function FeaturesSection() {
  const features = [
    {
      title: "100% Swiss Quality",
      icon: <LiaCertificateSolid />,
    },
    {
      title: "30-min Delivery Guarantee",
      icon: <IoTimerSharp />,
    },
    {
      title: "Hygiene Certified",
      icon: <LiaCertificateSolid />,
    },
    {
      title: "Food Law Certified",
      icon: <LiaCertificateSolid />,
    },
  ];
  

  return (
    <section className="bg-gray-100 py-20 px-10">
          {/* STATS CARD */}
   
          <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
      Kyun Hai Humara <span className="text-[#F5185a]">Street Swad</span> Sabse Alag?
    </h2>

    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Fresh ingredients, lightning fast delivery aur hygiene ka full dhyaan —
      bas isi wajah se har bite ban jaati hai ek perfect street food experience.
    </p>
  </div>
        
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition duration-300 group"
          >
            {/* ICON */}
          <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-[#fff9f4] mb-6">
  <div className="text-[#F5185a] text-7xl flex items-center justify-center">
    {item.icon}
  </div>
</div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* TEXT */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor consectetur adipiscing elit, sed eiusmod
              tempor incididunt ut labore dolore magna aliqua
            </p>

            {/* LINK */}
            <div className="mt-6 text-[#F5185a] font-medium flex items-center justify-center gap-2">
              <span>♦</span>
              Discover More
              <span>♦</span>
            </div>
          </div>
        ))}

      </div>

       
    </section>
  );
}


// import { LiaCertificateSolid } from "react-icons/lia";
// import { IoTimerSharp } from "react-icons/io5";
// import { BsShopWindow } from "react-icons/bs";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { MdOutlineDeliveryDining } from "react-icons/md";
// import { motion } from "framer-motion";
// import { TbCertificate } from "react-icons/tb";

// export default function FeaturesSection() {
// const features = [
//     {
//       title: "100% Swiss Quality",
//       desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//       icon: <TbCertificate />,
//     },
//     {
//       title: "Fresh Ingredients",
//       desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//       icon: <IoFastFoodOutline />,
//     },
//     {
//       title: "Fast Delivery",
//       desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//       icon: <MdOutlineDeliveryDining />,
//     },
//     {
//       title: "Hygienic Cooking",
//       desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//       icon: <IoFastFoodOutline />,
//     },
//   ];
//     const stats = [
//     {
//       number: "300+",
//       label: "Vendors",
//       icon: <BsShopWindow />,
//     },
//     {
//       number: "400+",
//       label: "Dishes",
//       icon: <IoFastFoodOutline />,
//     },
//     {
//       number: "1000+",
//       label: "orders delivered",
//       icon: <MdOutlineDeliveryDining />,
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-20 px-10">
//           {/* STATS CARD */}
//       <div className="px-auto mx-auto mb-10 w-full max-w-4xl px-6 z-20">
//         <div className="bg-white rounded-3xl shadow-xl py-10 px-10 flex flex-col md:flex-row justify-between items-center gap-8">

//           {stats.map((item, index) => (
//             <div key={index} className="flex items-center gap-6 relative">

//               <div>
//                 <h3 className="text-3xl font-bold text-gray-700">
//                   {item.number}
//                 </h3>
//                 <p className="text-gray-500">{item.label}</p>
//               </div>

//               <div className="text-yellow-500 text-5xl">
//                 {item.icon}
//               </div>

            
//               {index !== stats.length - 1 && (
//                 <div className="hidden md:block absolute -right-10 h-10 w-px bg-gray-200"></div>
//               )}
//             </div>
//           ))}

//         </div>
//       </div>
//           <div className="text-center mb-14">
   


//  {/* Heading */}
//       <h2 className="text-5xl md:text-6xl my-10 font-bold text-red-500 leading-tight">
//            Kyun Hai Humara <span className="text-black">Street Swad</span> Sabse Alag?
//         </h2>

//     <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//       Fresh ingredients, lightning fast delivery aur hygiene ka full dhyaan —
//       bas isi wajah se har bite ban jaati hai ek perfect street food experience.
//     </p>
//   </div>
        
//    <div className="pt-18">
//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* Center Timeline */}
//         <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-[#F5185A] to-pink-200"></div>

//         {features.map((item, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80, x: isLeft ? -80 : 80 }}
//               whileInView={{ opacity: 1, y: 0, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className={`mb-24 flex items-center w-full ${
//                 isLeft ? "justify-start" : "justify-end"
//               }`}
//             >
//               {/* Card */}
//               <div className="relative w-[45%] bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300">

//                 {/* ICON */}
//                 <div className="absolute -top-8 left-8  flex items-center justify-center bg-[#fff9f4] rounded-full p-3 text-[#F5185A] text-6xl ">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Timeline Dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#F5185A] rounded-full border-4 border-white shadow-lg"></div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>

       
//     </section>
//   );
// }