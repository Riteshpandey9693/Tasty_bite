import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingCart,
  FaUserCircle, FaMoon, FaSun, FaBars, FaTimes,
} from "react-icons/fa";
import { LOGO_URL } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Collapse mobile menu after navigation
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md sticky top-0 z-50 transition-colors duration-300`}>
      <div className={`flex justify-between items-center px-4 py-3 md:px-8 ${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-orange-400 to-yellow-500"} shadow-lg`}>
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={handleNavClick}>
          <img className="h-10 w-10 md:h-14 md:w-14 rounded-full shadow-md" src={LOGO_URL} alt="Tasty Bites Logo" />
          <span className="ml-3 text-lg md:text-2xl font-bold text-white">Tasty Bites</span>
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Items */}
        <nav className={`${menuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-gradient-to-br md:static md:flex md:w-auto md:bg-transparent md:p-0 md:space-x-6 z-40`}>
          <ul className={`flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 text-white font-semibold text-sm md:text-base ${menuOpen ? "bg-gradient-to-br from-orange-400 to-yellow-400" : "bg-transparent"} md:bg-transparent`}>
            <li className="flex items-center">
              <span>Status:</span>
              <span className={`ml-1 text-lg ${onlineStatus ? "text-green-400" : "text-red-500"}`}>
                {onlineStatus ? "🟢" : "🔴"}
              </span>
            </li>
            <li className="flex items-center hover:text-yellow-200 transition">
              <FaHome className="mr-1" />
              <Link to="/" onClick={handleNavClick}>Home</Link>
            </li>
            <li className="flex items-center hover:text-yellow-200 transition">
              <FaInfoCircle className="mr-1" />
              <Link to="/about" onClick={handleNavClick}>About Us</Link>
            </li>
            <li className="flex items-center hover:text-yellow-200 transition">
              <FaPhoneAlt className="mr-1" />
              <Link to="/contact" onClick={handleNavClick}>Contact</Link>
            </li>
            <li className="flex items-center hover:text-yellow-200 transition">
              <FaShoppingCart className="mr-1" />
              <Link to="/cart" onClick={handleNavClick}>Cart - {cartItems.length}</Link>
            </li>
          </ul>
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-yellow-300 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>

          <div className="flex items-center space-x-2 cursor-pointer group">
            <FaUserCircle className="text-white text-2xl" />
            <span
              onClick={toggleLogin}
              className="text-white font-semibold hover:text-yellow-300 transition"
            >
              {isLoggedIn ? "Logout" : "Sign In"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Profile & Dark Mode Toggle */}
      {menuOpen && (
        <div className="flex flex-col md:hidden items-start px-4 py-2 space-y-4 bg-gradient-to-br from-orange-400 to-yellow-400 text-white">
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="flex items-center space-x-2"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
          <div className="flex items-center space-x-2" onClick={() => {
            toggleLogin();
            setMenuOpen(false);
          }}>
            <FaUserCircle className="text-xl" />
            <span>{isLoggedIn ? "Logout" : "Sign In"}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
