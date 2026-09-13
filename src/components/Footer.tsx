import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="mb-3">
              <img src={logo} alt="" className="w-28" />
            </div>

            <p className="text-xs text-gray-400 leading-5 max-w-md">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-5 mt-4 text-xs text-gray-500">
              <a href="" className="hover:text-purple-600">
                Github
              </a>

              <a href="" className="hover:text-purple-600">
                Twitter
              </a>

              <a href="" className="hover:text-purple-600">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800 mb-4">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="" className="hover:text-purple-600">
                  Home
                </a>
              </li>

              <li>
                <a href="" className="hover:text-purple-600">
                  Technologies
                </a>
              </li>

              <li>
                <a href="" className="hover:text-purple-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800 mb-4">
              COMPANY
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="" className="hover:text-purple-600">
                  About
                </a>
              </li>

              <li>
                <a href="" className="hover:text-purple-600">
                  Contact
                </a>
              </li>

              <li>
                <a href="" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800 mb-4">LEGAL</h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <a href="" className="hover:text-purple-600">
              Privacy
            </a>

            <a href="" className="hover:text-purple-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
