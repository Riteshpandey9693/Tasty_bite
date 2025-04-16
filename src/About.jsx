import React from "react";
import { GraduationCap, Code, Star, Sparkles, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-20">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-10 rounded-2xl shadow-xl">

        {/* About Us */}
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
          Welcome to our space! We specialize in building interactive, scalable, and high-performance web applications. Our mission is to deliver modern and responsive solutions that are as functional as they are beautiful. With a focus on clean code and user-first design, we turn ideas into digital reality.
        </p>

        {/* My Profile */}
        <h1 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-2">
          <User /> My Profile
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          👋 Hi, I'm <span className="font-semibold text-orange-600">Ritesh Pandey</span>, a passionate
          <span className="font-semibold text-orange-500"> Frontend Developer</span> who loves crafting beautiful, responsive,
          and performance-optimized websites. I believe in continuous learning, clean code, and pixel-perfect design.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-500">
              <GraduationCap /> Education
            </h2>
            <div className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">BSc, Veer Kuwar Singh University</h3>
              <p className="text-gray-600 text-sm">Graduated: 2024</p>
              <p className="text-gray-600 text-sm mt-1">Major: Computer Science</p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-500">
              <Code /> Skills
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> HTML, CSS, JavaScript
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> Tailwind CSS, Bootstrap
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> React.js, Node.js
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> SQL, MongoDB
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} /> Java, DSA
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-500">
            <Sparkles /> Certifications
          </h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 ml-2">
            <li>Java + DSA - Alpha Certificate</li>
            <li>Fullstack Development - Delta Certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
