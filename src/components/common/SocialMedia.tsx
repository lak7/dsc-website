import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Linkedin = () => {
  return (
    <a
      href= "https://in.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-pink-500 hover:text-pink-700"
    >    
      <FaLinkedin />
    </a>
  );
};

const Instagram = () => {
  return (
    <a
      href=  "https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-blue-600 hover:text-blue-800"
    >
      <FaInstagram />
    </a>
  );
};

export { Linkedin, Instagram };
