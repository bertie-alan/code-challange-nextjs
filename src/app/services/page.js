import CompanyTagline from "../components/CompanyTagline";
import Navbar from "../components/Navbar";
import ProductItems from "../components/ProductItems";

export const metadata = {
  title: "Our Products - W&N",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ProductItems />
      <CompanyTagline />
    </>
  );
}
