import React from "react";
import logo from "./../assets/img/logo.png";
import iconclose from "./../assets/img/icon-close.svg";

export default function Navbar() {
  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <img src={logo} className="w-24 lg:w-48" alt="logo image" />
            </a>
          </div>
          <div className="container flex items-center justify-end">
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <a
                    href="#home"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Inicio
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a
                    href="#about"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Perfil
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a
                    href="#services"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Estudios
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a
                    href="#work"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Experiencia
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a
                    href="#portfolio"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portafolio
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a
                    href="#contact"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contacto
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <img src={iconclose} className="h-10 w-auto" alt="" />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <a
                href="#home"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Inicio
              </a>
            </li>

            <li className="py-2">
              <a
                href="#about"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Perfil
              </a>
            </li>

            <li className="py-2">
              <a
                href="#services"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Estudios
              </a>
            </li>

            <li className="py-2">
              <a
                href="#work"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Experiencia
              </a>
            </li>

            <li className="py-2">
              <a
                href="#portfolio"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portafolio
              </a>
            </li>

            <li className="py-2">
              <a
                href="#contact"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
