import React from "react";
import FeaturedShelfStorages from "../../components/featuredShelfStorages/featuredShelfStorages";
import ActiveShelfStorages from "../../components/activeShelfStorages/activeShelfStorages";
import Hero from "../../components/hero/hero";
import ProductSection from "../../components/productSection/productSection";
import QuerySection from "../../components/querySection/querySection";
import Footer from "../../components/footer/footer";
import LearnSection from "../../components/learnSection/learnSection";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedShelfStorages />
      <ActiveShelfStorages />
      <ProductSection />
      <LearnSection />
      <QuerySection />
      <Footer />
    </>
  );
};

export default Home;
