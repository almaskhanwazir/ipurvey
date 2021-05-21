import Layout from "../components/Layout";
import HeroSection from "../Components/HeroSection";
import CookieSection from "../Components/CookieSection";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <CookieSection/>
    </Layout>
  );
};

export default Index;
