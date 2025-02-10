"use client";

import { useState, useEffect } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Linkedin, Instagram, Twitter } from "./common/SocialMedia";

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
    <Box as="footer" className="bg-neutral-950">
      <Flex justify="center" mb={4} className="social-icons">
        <HStack spacing={6}>
          <Instagram />
          <Linkedin />
          <Twitter />
        </HStack>
      </Flex>

      <Flex justify="center" mb={4} className="nav-links">
        <HStack spacing={4}>
          {["Home", "About", "Event Calendar", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
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
          <Text
            fontSize="xs"
            color="gray.500"
            mt="0"
            bg="black"
            w="full"
            pb="0.5rem"
          >
            All rights reserved.
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Footer;
