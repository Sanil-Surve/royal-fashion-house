import React from "react";

function Navbar() {
  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="text-black-300 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="king.jpeg" // replace with your image path
            alt="Logo"
            className="w-12 h-12 p-1 rounded-full"
          />
          <span className="ml-3 text-2xl font-bold text-black-300">
            Royal Fashion House
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => handleScroll("home")}
          >
            Home
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => handleScroll("about")}
          >
            About Us
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


