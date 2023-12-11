import AboutUs from "../components/AboutUs";
import CompanyHistory from "../components/CompanyHistory";
import CompanyTagline from "../components/CompanyTagline";
import Culture from "../components/Culture";
import Navbar from "../components/Navbar";
import Teams from "../components/Teams";

export default function About() {
  return (
    <>
      <Navbar />
      {/* <AboutUs /> */}
      <CompanyHistory />
      <Teams />
      <Culture />
      <CompanyTagline />
    </>
  );
}
