import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
// import LinkButton from "./LinkButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/navlinks";
import NavLinkButton from "./NavLinkButton";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //ftn to toggle menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-blue-700 h-[60px] flex items-center border-blue-500 w-full fixed top-0 left-0 right-0 z-50">
      {/* the nav container */}
      <header className="px-24 max-lg:px-6 max-sm:px-3 flex justify-between items-center w-full h-auto">
        <Link to="/" className="w-fit h-auto flex items-center space-x-1">
          <div aria-label="the logo container" className="w-[40px] h-[40px]">
            <img src={logo} alt="react-jobs-logo" />
          </div>
          <h3 className="text-3xl text-white font-semibold font-lato">
            Jobs4All
          </h3>
        </Link>

        <span
          aria-label="nav links container"
          className="flex space-x-9 flex-1 justify-center items-center max-sm:justify-end max-sm:pr-4 w-full relative"
        >
          {/* the nav links */}
          {/* home link */}
          {navLinks.length &&
            navLinks.map((link) => (
              <div
                className="w-fit h-auto flex justify-center space-x-5 items-center max-sm:hidden"
                key={link.label}
              >
                <NavLinkButton
                  fontWeight="font-medium"
                  text={link.label}
                  to={link.to}
                  borderWeight="border-none"
                  textColor="text-white"
                  paddingX="px-4"
                  paddingY="py-2"
                  hoverColor="hover:bg-purple-500"
                  hoverTextColor="hover:text-white"
                  backgroundColor="bg-black"
                  bgOpacity="bg-opacity-20"
                />
              </div>
            ))}
          {/* the hamburger button */}
          <motion.button
            aria-label="the fa icon container"
            className=" hidden max-sm:flex p-2 bg-blue-500 hover:bg-blue-50 rounded-sm transition-all duration-500 ease-in-out group"
            onClick={handleToggleMenu} //toggles D menu
            animate={{ rotate: menuOpen ? 360 : 0 }} // Rotates 360° when clicked
            transition={{
              duration: 0.05, // Adjust speed
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {menuOpen ? (
              <FaTimes className="text-white font-bold group-hover:text-blue-500  transition-all duration-500 ease-in-ou text-2xl" />
            ) : (
              <FaBars className="text-white font-bold group-hover:text-blue-500  transition-all duration-500 ease-in-ou text-2xl" />
            )}
          </motion.button>
        </span>
      </header>
      {/* the navigation mobile menu drop down */}
      <motion.div
        className={`fixed top-[60px] left-0 w-full right-0 bg-blue-500 transition-all duration-500 ${menuOpen ? "max-sm:block" : "max-sm:hidden"}`}
        role="navigates or toggles the mobile menu"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: menuOpen ? "0%" : "100%", opacity: menuOpen ? 1 : 0 }}
        transition={{
          duration: 0.05,
          type: "spring",
          stiffness: 250, // Adjust bounce strength
          damping: 50, // Controls how fast it settles
        }}
      >
        {navLinks.length &&
          navLinks.map((link) => (
            <div
              className="hidden w-full h-auto space-x-5  max-sm:block"
              key={link.label}
            >
              <NavLinkButton
                fontWeight="font-medium"
                text={link.label}
                to={link.to}
                borderWeight="border-none"
                textColor="text-white"
                paddingX="px-4"
                paddingY="py-2"
                hoverColor="hover:bg-purple-500"
                hoverTextColor="hover:text-white"
                backgroundColor="bg-black"
                bgOpacity="bg-opacity-20"
                width="w-full"
                borderRadius="rounded-none"
              />
            </div>
          ))}
      </motion.div>
    </nav>
  );
};

export default NavBar;

//border-2 border-red-500
//border-2 border-purple-500
//border-2 border-green-500
//border-2 border-orange-500
//border-2 border-blue-500
