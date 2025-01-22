import React from "react";
import WhoAmI from "../components/WhoAmI";
import Me from "../components/Me";
import MyJourney from "../components/MyJourney";
import ServicesHover from "../components/Certificate";

const page = () => {
  return (
    <section>
      {" "}
      <WhoAmI />
      <Me />
      <MyJourney />
      <ServicesHover />
    </section>
  );
};

export default page;
