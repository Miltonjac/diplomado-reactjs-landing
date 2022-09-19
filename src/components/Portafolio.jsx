import React from "react";
import uno from "./../assets/img/portafolio-landig-react.png";

export default function Portafolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Mira mi portafolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Estos son los proyectos que he realizado.
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a
          href="https://diplomado-reactjs-landing.vercel.app/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src={uno}
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-stripe.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-fedex.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-microsoft.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
      </div>
    </div>
  );
}
