import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Contacto from "./components/Contacto";

import Estudios from "./components/Estudios";
import Experiencia from "./components/Experiencia";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portafolio from "./components/Portafolio";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Profile />
      <Estudios />
      <Experiencia />
      <Portafolio />
      <Contacto />
    </>
  );
}

export default App;
