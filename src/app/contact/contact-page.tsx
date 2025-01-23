"use client";
import { Linkedin, Instagram, Twitter } from "@/components/common/SocialMedia";
import { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  // Handle form data changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "ee520e50-6160-4fe7-baa9-538a97d5dd36");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Failed to submit. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-light">
      <div className=" min-h-screen bg-black text-white font-light ">
        {/* Heading */}
        <h1 className=" pt-[60px] sm:pt-[70px] md:pt-[85px] lg:pt-[95px] hero-heading  text-blue-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12  text-center">
          <b>C O N T A C T</b>
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 px-4 md:px-8 lg:px-16">
          {/* Left Side - Social Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 max-w-2xl flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="relative group w-full max-w-sm">
              {/* Image with Opacity */}
              <img
                src="/connect.jpg"
                alt="Connect"
                className="w-full h-auto rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg text-gray-300 mb-4 text-center">
                  Connect with us on social media!
                </p>
                <div className="flex space-x-4">
                  <Linkedin />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Message Form */}
          <div className="w-full md:w-1/2 lg:w-1/3 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 px-4 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="p-2 rounded bg-gray-700 text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
              >
                Send Message
              </button>
              {result && (
                <div className="mt-4 text-center text-lg text-gray-300">
                  <p>{result}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
