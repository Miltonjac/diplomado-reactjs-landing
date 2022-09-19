import React from "react";

export default function Contacto() {
  return (
    <div>
      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Aquí estan mis datos de contacto
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          ¿Te puedo ayudar en algo?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Si deseas me puedes contatar para que hablemos de ese proyecto de
            base tecnologíca que tienes en mente, para mí sería un placer
            ayudarte a que sea una realidad.
          </p>
        </div>

        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                Mi Telefono
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+57) 300 520 11 21
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                Mi Correo
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              miltonjac2107@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                Mi ubicación
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              Medellín, Antioquia, Colombia.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved, Milton Arias.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="https://www.linkedin.com/in/miltonjac/" target="_blank" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="https://twitter.com/home" target="_blank" className="pl-4">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="https://www.facebook.com/pamelw" target="_blank" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
