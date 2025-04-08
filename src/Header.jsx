import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingCart, FaUserCircle, FaStore } from "react-icons/fa";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInuser } = useContext(UserContext);

    // Subscribing to the store using a Selector.
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-orange-400 to-yellow-500 shadow-lg">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full shadow-md" src={LOGO_URL} alt="Logo" />
                    <h1 className="text-2xl font-bold text-white ml-4">Foodie</h1>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 text-white font-semibold text-lg">
                        <li className="flex items-center">
                            <span className="mr-1">Status:</span>
                            <span className={`text-lg ${onlineStatus ? "text-green-400" : "text-red-500"}`}>
                                {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                            </span>
                        </li>
                        <li className="hover:scale-105 transition-transform flex items-center">
                            <FaHome className="mr-2" />
                            <Link to="/" className="hover:text-yellow-300">Home</Link>
                        </li>
                        <li className="hover:scale-105 transition-transform flex items-center">
                            <FaInfoCircle className="mr-2" />
                            <Link to="/about" className="hover:text-yellow-300">About Us</Link>
                        </li>
                        <li className="hover:scale-105 transition-transform flex items-center">
                            <FaPhoneAlt className="mr-2" />
                            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
                        </li>
                        <li className="hover:scale-105 transition-transform flex items-center">
                            <FaStore className="mr-2" />
                            <Link to="/grocery" className="hover:text-yellow-300">Grocery</Link>
                        </li>
                        <li className="hover:scale-105 transition-transform flex items-center">
                            <FaShoppingCart className="mr-2" />
                            <Link to="/cart" className="hover:text-yellow-300">Cart - {cartItems.length}</Link>
                        </li>
                    </ul>
                </nav>

                {/* Login Button */}
                <div className="flex items-center space-x-4">
                    <button
                        className="px-4 py-2 bg-white text-orange-500 font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-300 hover:text-black"
                        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                    >
                        {btnName}
                    </button>
                    <div className="flex items-center text-white">
                        <FaUserCircle className="text-2xl mr-2" />
                        <span>{loggedInuser.name}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
