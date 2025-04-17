import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate success
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 4 seconds
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-20">
      {/* Success Message */}
      {submitted && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-lg shadow-md text-sm z-50">
          ✅ Your message has been sent successfully!
        </div>
      )}

      <div className="max-w-5xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="md:flex">
          {/* Contact Info */}
          <div className="md:w-1/2 p-10 bg-gradient-to-br from-orange-100 to-yellow-100 flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold text-orange-600 mb-2">Get in Touch</h2>
            <p className="text-gray-700 text-base mb-4">
              Have a question, feedback, or just want to say hello? I'd love to hear from you!
            </p>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <span className="text-gray-800">ritesh.pandey.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span className="text-gray-800">+91 96938 08905</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span className="text-gray-800">Arrah, Bihar, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 p-10 bg-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
