import { Link } from "react-router-dom";
export default function FloatingAppButton() {
  return (
    <Link
       to="https://play.google.com/store/apps/details?id=com.utility.finunique" target="blank"
      download
      className="fixed bottom-6 right-6 bg-[#f5185a] text-white animate-bounce px-5 py-3 rounded-full shadow-lg hover:bg-[#f5185a]/80 transition z-50"
    >
      Download App
    </Link>
  );
}