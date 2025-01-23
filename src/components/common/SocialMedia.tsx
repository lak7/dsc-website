import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/company/dsc-bvp/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-pink-500 hover:text-pink-700"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>
  );
};

const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/gdscbvp"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-pink-500 hover:text-pink-700"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
  );
};

const Twitter = () => {
  return (
    <a
      href="https://x.com/dsc_bvp"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-pink-500 hover:text-pink-700"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
  );
};

export { Linkedin, Instagram, Twitter };
