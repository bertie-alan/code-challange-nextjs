import CompanyTagline from "../components/CompanyTagline";
import Navbar from "../components/Navbar";
import RandomUsers from "../components/RandomUsers";

export const metadata = {
  title: "Teams - W&N",
};

export default async function TeamsRandom() {
  return (
    <>
      <Navbar />
      <RandomUsers />
      <CompanyTagline />
    </>
  );
}
