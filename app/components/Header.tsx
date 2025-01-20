import React from "react";

const Header = ({ text, text2 ,bordertop}: { text: string; text2: string,bordertop?:boolean }) => {
  return (
    <div className={`flex w-full ${bordertop?"border-t":"border-b"}  py-5  border-b-gray-400 justify-between`}>
      <h3 className=" text-maincolor2 font-semibold ">{text}</h3>
      <p className=" text-muted-foreground">{text2}</p>
    </div>
  );
};

export default Header;
