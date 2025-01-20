"use client";

import { useState, useEffect } from "react"; 
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Use useLayoutEffect to prevent hydration errors by using client-side only logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state and listen for resize events
    handleResize();  // Call it once during mounting to determine the initial state
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <Box as="footer">
      {/* Social Media Icons */}
      <Flex justify="center" mb={4} className="social-icons">
        <HStack spacing={6}>
          <Link href="#" aria-label="Facebook">
            <FaFacebook />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="#" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link href="#" aria-label="Google">
            <FaGoogle />
          </Link>
          <Link href="#" aria-label="YouTube">
            <FaYoutube />
          </Link>
        </HStack>
      </Flex>

      {/* Navigation Links */}
      <Flex justify="center" mb={4} className="nav-links">
        <HStack spacing={8}>
          {["Home", "News", "About", "Contact Us", "Our Team"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Copyright Section */}
      <VStack spacing={2} className="copyright">
        <Text className="year">
          Copyright &copy; 2025; Developer Students Club
        </Text>
        {isMobile && (
          <Text className="reserved">
            All rights reserved.
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Footer;
