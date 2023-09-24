import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";
import Projects from "../src/Pages/Projects";
import Resume from "../src/Pages/Resume";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function RoutesWeb() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/resumo" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
