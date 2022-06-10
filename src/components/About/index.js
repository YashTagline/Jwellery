import React from "react";
import CommanBanner from "../comman/CommanBanner";
import AboutBg from "../../assets/images/about-bg.jpeg";
import AboutZoo from "./aboutZoo";
import Partners from "../comman/partners";
import Testimonial from "../comman/testimonial";
import AboutMission from "./aboutMission";
import AboutDepartment from "./aboutDepartment";
import Team from "../comman/team";
const About = () => {
  return (
    <div>
      <CommanBanner bgImage={AboutBg} mainTitle="About" mainSubTitle="Zoo" smallTtile="Animal World"></CommanBanner>
      <AboutZoo></AboutZoo>
      <AboutMission></AboutMission>
      <AboutDepartment></AboutDepartment>
      <Team></Team>
      <Testimonial></Testimonial>
      <Partners></Partners>
    </div>
  );
};

export default About;
