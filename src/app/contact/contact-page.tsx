"use client";
import { Linkedin, Instagram, Twitter } from "@/components/common/SocialMedia";
import { useState } from "react";
import EarthCanvas from "@/components/Earth";
import { motion } from "framer-motion";

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
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
        setResult("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Failed to submit. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:pt-32 relative z-10">
        {/* Heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="special-font hero-heading text-blue-100 text-4xl sm:text-5xl md:text-8xl font-bold text-center mb-16 tracking-wider"
        >
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            C
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            <b>O</b>
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            NT
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            <b>A</b>
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            CT{" "}
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            {"-"}
            <b>U</b>
          </span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            S
          </span>
        </motion.h1>

        {/* Content wrapper */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 mt-8 max-w-7xl mx-auto">
          {/* Earth Canvas Section */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-1/2 h-[350px] sm:h-[450px] xl:h-[700px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <EarthCanvas />
          </motion.div>

          {/* Form Section */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-1/2 max-w-2xl"
          >
            <div className="backdrop-blur-sm bg-white/5 border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-lg text-gray-300 mb-3 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-4 bg-black/40 text-white border border-gray-700/50 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder-gray-500"
                    required
                    placeholder="Random Dude"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-lg text-gray-300 mb-3 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 bg-black/40 text-white border border-gray-700/50 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 placeholder-gray-500"
                    required
                    placeholder="dudes@example.com"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-lg text-gray-300 mb-3 font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="p-4 bg-black/40 text-white border border-gray-700/50 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none placeholder-gray-500"
                    required
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-neutral-100 to-neutral-200 hover:from-black hover:to-black text-black rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg border-2 border-black hover:text-white hover:border-white disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" /> */}
                </button>

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <p
                      className={`text-lg ${
                        result.includes("success")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {result}
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
