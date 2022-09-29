import { Routes, Route, Link } from "react-router-dom";

import { Albumes } from '../Albumes/Albumes.js'
import { Historia } from "../Historia/Historia.js";
import { Home } from '../Home/Home.js'
import { Integrantes } from '../Integrantes/Integrantes.js'
import { Menu } from '../Menu/Menu.js'
import { Footer } from "../Footer/Footer.js";


export function Rutas() {
    return (
      <div>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="albumes" element={<Albumes/>} />
          <Route path="historia" element={<Historia/>} />
          <Route path="integrantes" element={<Integrantes/>} />
        </Routes>
        <Footer></Footer>
      </div>
    );
}