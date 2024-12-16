import React from "react";
import Doctors from "~/components/Home/Doctors/Doctors";
import Hero from "~/components/Home/Hero/Hero";
import Services from "~/components/Home/Services/Services";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Hero />
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;
