"use client";
import { Linkedin, Instagram } from "@/components/common/SocialMedia";
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
    <div className="h-screen bg-black text-white font-light">
      {/* Main Content */}
      <main className="min-h-screen flex sm:flex-row flex-col items-center justify-center px-4">
        {/* Left Side - Social Links */}
        <div
          className="sm:w-1/3 max-w-2xl mx-auto sm:ml-12 flex flex-col justify-center sm:h-full"
          style={{
            backgroundImage: `url('build.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-lg text-gray-300 mb-4">
            Connect with us on social media!
          </p>
          <div className="flex space-x-8 justify-center sm:justify-start">
            <Linkedin />
            <Instagram />
          </div>
        </div>

        {/* Right Side - Message Form */}
        <div className="sm:w-1/3 max-w-2xl mx-auto sm:ml-12 flex flex-col justify-center sm:h-full">
          <h1 className="special-font text-blue-100 text-4xl sm:text-6xl mb-12">
            <b>
              C O N T A C T <br /> P A G E
            </b>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
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
      </main>
    </div>
  );
};

export default ContactUs;
