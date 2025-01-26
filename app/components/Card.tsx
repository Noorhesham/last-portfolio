import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  icon?: React.ReactElement;
  paragraph?: string;
  children: ReactNode;
  img?: string;
  nohover?: boolean;
  className?: string;
}

const Card = React.memo(({ title, icon, paragraph, children, img, nohover = false, className }: CardProps) => {
  return (
    <div
      className={`${
        className || ""
      } min-h-44 border group border-muted-foreground relative p-4 rounded-2xl bg-white w-full overflow-hidden`}
    >
      {!img && !nohover && (
        <div
          className="absolute z-10 inset-0 bg-gradient-radial left-[-70%]
             -top-1/2 from-maincolor2/50 to-transparent 
            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      )}
      {img && (
        <div className="group-hover:scale-110 duration-300 w-full h-full absolute inset-0">
          <Image loading="lazy" src={img} alt="" fill className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-start gap-2">
        {title && (
          <h2 className="flex items-center lg:text-xl text-lg gap-2">
            {icon &&
              React.cloneElement(icon, {
                className: "group-hover:-rotate-6 group-hover:scale-125 duration-150",
              })}
            {title}
          </h2>
        )}
        {paragraph && <p className="font-normal text-muted-foreground">{paragraph}</p>}
      </div>
      {children}
    </div>
  );
});

export default Card;
