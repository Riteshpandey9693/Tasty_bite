import React from "react";
import {
  GraduationCap,
  Code,
  Star,
  Sparkles,
  User,
  ArrowLeftCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-12 md:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl">

        {/* Back Button */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition"
          >
            <ArrowLeftCircle size={20} /> Back to Home
          </Link>
        </div>

        {/* About Me */}
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          About Me
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
          Welcome to my world! I specialize in building interactive, scalable,
          and high-performance web applications. With a focus on clean code and
          user-first design, I turn ideas into digital reality.
        </p>

        {/* My Profile */}
        <h1 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-2">
          <User /> My Profile
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          👋 Hi, I'm{" "}
          <span className="font-semibold text-orange-600">Ritesh Pandey</span>, a passionate
          <span className="font-semibold text-orange-500"> Frontend Developer</span> who loves
          crafting beautiful, responsive, and performance-optimized websites.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-500">
              <GraduationCap /> Education
            </h2>
            <div className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                MCA, Veer Kuwar Singh University
              </h3>
              <p className="text-gray-600 text-sm">Duration: 2024 - 2026</p>
              <p className="text-gray-600 text-sm mt-1">Major: Computer Applications</p>
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
        {/* Services */}
<div className="mt-10">
  <h2 className="flex items-center gap-2 text-2xl font-semibold text-orange-500">
    <Code /> Services
  </h2>
  <ul className="grid md:grid-cols-2 gap-4 mt-4 text-gray-700">
    <li className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
      <p className="text-sm">Building responsive, accessible, and visually appealing websites using React, HTML, CSS, and JavaScript.</p>
    </li>
    <li className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">UI/UX Optimization</h3>
      <p className="text-sm">Designing clean user interfaces and enhancing user experience for better engagement.</p>
    </li>
    <li className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Fullstack Projects</h3>
      <p className="text-sm">Creating complete web solutions using React.js, Node.js, MongoDB, and RESTful APIs.</p>
    </li>
    <li className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Version Control</h3>
      <p className="text-sm">Collaborating on projects using Git and GitHub, ensuring code quality and history tracking.</p>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default About;
