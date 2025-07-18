import { Link } from "react-router-dom";
import HomeNavbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#264653] flex flex-col justify-center items-center px-6">
      <HomeNavbar />
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Organize Your Day, One Task at a Time{" "}
          <span className="text-[#e9c46a]">✓</span>
        </h1>
        <p className="text-gray-200 text-lg mb-8">
          Welcome to
          <span className="font-semibold text-white"> ORGANIZR</span> — your
          personal productivity companion. Add tasks, mark them complete, and
          stay focused on what truly matters.
        </p>

        <Link to="/login">
          <button className="bg-[#2a9d8f] hover:bg-[#21867a] text-white text-lg px-6 py-3 rounded-full shadow-md transition duration-300 flex items-center mx-auto">
            Get Started <span className="ml-2">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
