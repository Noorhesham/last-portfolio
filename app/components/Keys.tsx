import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./Paragraph";

const Keys = () => {
  return (
    <MaxWidthWrapper className=" flex justify-between items-start gap-5">
      <div>
        <Paragraph text="Some<br>key figures<br>that you may<br>find useful" />
      </div>
      <div className=" rounded-2xl border-black  border"></div>
    </MaxWidthWrapper>
  );
};

export default Keys;
