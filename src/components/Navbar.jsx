import React, { useState } from "react";
import "../index.css";
import tmulogo from "../assets/tmulogo.png"

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav className="bg-gray-100 border-gray-200" id="navbar-page">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-screen mx-auto p-4">
        <a
          href="https://www.torontomu.ca/cs/"
          target="_blank"
          className="flex items-center space-x-3"
        >
          <img
            src={tmulogo}
            className="h-8"
            alt="Toronto Metropolitan University's Logo"
          />
          <span className="self-center text-base md:text-2xl font-semibold whitespace-nowrap">
            Toronto Metropolitan University
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={isOpened}
          onClick={toggleMenu}
        >
          <svg 
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpened ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100">
            <li>
              <a
                href="#home-page"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-page"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience-page"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects-page"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-page"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
