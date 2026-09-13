import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center h-20 md:h-25 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <img src={Logo} alt="" className="w-28 md:w-32" />
        </div>

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <a href="" className="text-[#DB2777]">
              Home
            </a>
          </li>

          <li>
            <a href="">Technologies</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button>Sign In</button>

          <button className="btn btn-secondary rounded-full">Sign Up</button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-5">
          <li>
            <a href="" className="text-[#DB2777]">
              Home
            </a>
          </li>

          <li>
            <a href="">Technologies</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
