import React, { useState, useEffect } from "react";
import {
  Facebook, Twitter, Instagram, Youtube,
  Phone, Mail, MapPin, ShoppingBag, ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const footerPosition = document.getElementById("contact")?.offsetTop || 0;
      setShowBackToTop(scrollPosition >= footerPosition - window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowBackToTop(false);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white">Tasty<span className="text-orange-500">Bites</span></span>
            </a>
            <p className="text-sm">Bringing delicious food to your doorstep. Quality meals with lightning-fast delivery.</p>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Menu", "About Us", "Offers", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, "")}`} className="hover:text-orange-500">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get the App</h3>
            <p className="mb-4 text-sm">Order food anytime, anywhere. Download the app now!</p>
            <a href="#" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get App" className="h-10" />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                <span>123 Food Street, Tasty City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-2" />
                <a href="tel:+1234567890">+123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-2" />
                <a href="mailto:info@tastybites.com">info@tastybites.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 text-center">
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
          <p>&copy; {new Date().getFullYear()} Tasty Bites. Created with ❤️ by Ritesh</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">Cookies</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={handleBackToTopClick}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
          aria-label="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
