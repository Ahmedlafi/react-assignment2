import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  
  return (
    <>
      <footer className="bg-[#2c3e50]">
        <div className="mx-auto w-full max-w-6xl text-center">
          <div className="grid grid-cols-2 gap-12  py-6 lg:py-18  md:grid-cols-3">
            <div>
              <h1 className="mb-6 text-4xl font-semibold uppercase text-white">
                LOCATION
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-xl">
                2215 John Daniel Drive
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xl">
                Clark, MO 65243
              </p>
            </div>
            <div>
              <h1 className="mb-6 text-4xl font-semibold  uppercase text-white">
                AROUND THE WEB
              </h1>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white border  rounded-full p-2"
                >
                  <FaFacebook className="w-6 h-6 text-white" />
                  <span className="sr-only">Facebook page</span>
                </Link>

                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white border  rounded-full p-2"
                >
                  <FaTwitter className="w-6 h-6 text-white" />
                  <span className="sr-only">Twitter page</span>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white border  rounded-full p-2"
                >
                  <TbWorld className="w-6 h-6 text-white" />
                  <span className="sr-only">Twitter page</span>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white border  rounded-full p-2"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                  <span className="sr-only">Twitter page</span>
                </Link>
              </div>
            </div>
            <div>
              <h1 className="mb-6 text-4xl font-semibold text-white uppercase ">
                ABOUT FREELANCER
              </h1>
              <p className="text-white text-xl">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 bg-[#090c10] w-full text-center">
          <span className="text-lg text-gray-500 dark:text-gray-300 text-center">
            Copyright © Your Website 2021
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
