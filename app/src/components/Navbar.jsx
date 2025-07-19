import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#264653] tracking-wide">
          <Link to="/">Organizr</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-950">
          <li>
            <Link to="/login">
              <button className="px-4 py-2 bg-[#2a9d8f] text-white rounded hover:bg-[#21867a] transition">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="px-4 py-2 border border-[#217066] text-[#2a9d8f] rounded hover:bg-[#264653] hover:text-white transition">
                Register
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
