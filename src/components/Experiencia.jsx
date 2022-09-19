import React from "react";
import cantabria from "./../assets/img/cantabria.png";
import colte from "./../assets/img/colte.jpg";
import spotify from "./../assets/img/logo-spotify.svg";

export default function Experiencia() {
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Mi Experiencia laboral
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Estas son las empresas para las que he trabajado
      </h3>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src={cantabria}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Ago 2014 - Sep 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Analista de Sistemas
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Responsable del area de tecnología de la institución, desarrollo y administración del sitio web.
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src={colte}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Sept 2015 - Sept 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Consultor en Sistemas
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Administrador de la infraestructura tecnologíca, desarrollo y administración del sitio web.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
