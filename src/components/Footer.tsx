"use client";

import { useState, useEffect } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <Box as="footer">

      <Flex justify="center" mb={4} className="social-icons">
        <HStack spacing={6}>
          <Link href="/" aria-label="Facebook">
            <FaFacebook />
          </Link>
          <Link href="/" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="/" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link href="/" aria-label="Google">
            <FaGoogle />
          </Link>
          <Link href="/" aria-label="YouTube">
            <FaYoutube />
          </Link>
        </HStack>
      </Flex>


      <Flex justify="center" mb={4} className="nav-links">
        <HStack spacing={4}>
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

      <VStack spacing="0" textAlign="center" className="copyright">
        <Text fontSize="xs" color="gray.400" bg="black" w="full" py="2">
          Copyright &copy; 2025; Developer Students Club
        </Text>
        {isMobile && (
          <Text fontSize="xs" color="gray.500" mt="0" bg="black" w="full" pb="0.5rem">
            All rights reserved.
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Footer;
