import React from "react";
import WhoAmI from "../components/WhoAmI";
import Me from "../components/Me";
import MyJourney from "../components/MyJourney";
import ServicesHover from "../components/Certificate";

const page = () => {
  return (
    <section className=" bg-mainBg">
      {" "}
      <div className=" pt-20">
        <WhoAmI />
        <Me />
        <MyJourney />
        <ServicesHover />
      </div>
    </section>
  );
};

export default page;
