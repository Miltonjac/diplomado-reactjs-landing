import React from "react";
import america from "./../assets/img/americas.png"
import cesde from "./../assets/img/cesde.png"
import salazar from "./../assets/img/salazar.png"

export default function Estudios() {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Estudios
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={cesde} alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src={cesde} alt="development icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Técnico en Sistemas 2011 - 2012
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Centro de estudios especializados CESDE
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src={america}
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src={america}
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Tecnologo en Sistemas 2013 - 2016
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Fundación Universitaria Autonoma de las Americas
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src={salazar}
                alt="Mobile Application icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src={salazar}
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Ingeniero de Sistemas 2016 - 2021
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Institución Universitaria Salazar y Herrera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
