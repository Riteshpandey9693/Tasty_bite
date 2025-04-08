import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShoppingBag
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="section-padding pt-16 pb-8 px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white font-poppins">Food<span className="text-orange-500">Plaza</span></span>
            </a>
            <p className="mb-4 text-sm md:text-base">
              Bringing delicious food to your doorstep. We aim to deliver quality meals with lightning-fast delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Home</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors duration-200">Menu</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Offers</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-500" />
                Mon - Fri: 8am - 10pm
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-500" />
                Saturday: 9am - 11pm
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-500" />
                Sunday: 10am - 9pm
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>123 Food Street, Tasty City, Delicious Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <a href="tel:+1234567890" className="hover:text-orange-500">+123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-500" />
                <a href="mailto:info@foodplaza.com" className="hover:text-orange-500">info@foodplaza.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} FoodPlaza. Created with ❤️ by Ritesh</p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors duration-200 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200 mr-4">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
