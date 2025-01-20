"use client";

import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Button from "./common/Button";
import Link from "next/link";

const navItems = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Event Calendar", route: "event-calendar" },
  { name: "Contact", route: "contact" },
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <div className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl sm:text-5xl font-medium text-white tracking-wider">
              {"{;}"}
            </span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.route.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-300 hover:text-white p-2"
            >
              <RiMenu3Line className="h-6 w-6" />
            </button>
          )}
        </div>
      </nav>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="blackAlpha.700"
          backdropFilter="blur(8px)"
          color="white"
        >
          <DrawerCloseButton color="gray.300" />
          <DrawerBody display="flex" flexDirection="column" pt={8}>
            {navItems.map((item, index) => (
              <Link href={`/${item.route.toLowerCase()}`} key={index} passHref>
                <Box
                  as="div"
                  py={2}
                  px={3}
                  borderRadius="md"
                  _hover={{ bg: "whiteAlpha.300" }}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </Box>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavBar;
