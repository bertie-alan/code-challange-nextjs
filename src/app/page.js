import { Routes, Route } from "react-router-dom";
import CompanyOverview from "./components/CompanyOverview";
import CompanyTagline from "./components/CompanyTagline";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
// import HomePage from "./page";
// import AboutPage from "../app/about/About";
// import ServicesPage from "../app/about/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/teams" element={<Teams />} />
      </Routes> */}
      <Hero />
      <CompanyOverview />
      <Products />
      <Testimonials />
      <CompanyTagline />
    </>
  );
}
